const { User, Slop } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('slops');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('slops');
    },
    slops: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Slop.find(params).sort({ createdAt: -1 });
    },
    slop: async (parent, { slopId }) => {
      return Slop.findOne({ _id: slopId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('slops');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addSlop: async (parent, { slopText }, context) => {
      if (context.user) {
        const slop = await Slop.create({
          slopText,
          slopAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { slops: slop._id } }
        );

        return slop;
      }
      throw AuthenticationError;
    },
    addComment: async (parent, { slopId, commentText }, context) => {
      if (context.user) {
        return Slop.findOneAndUpdate(
          { _id: slopId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeSlop: async (parent, { slopId }, context) => {
      if (context.user) {
        const slop = await Slop.findOneAndDelete({
          _id: slopId,
          slopAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { slops: slop._id } }
        );

        return slop;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { slopId, commentId }, context) => {
      if (context.user) {
        return Slop.findOneAndUpdate(
          { _id: slopId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
