const { Schema, model } = require('mongoose');

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        user: {
            type: Number
        },
        date: {
            type: Date,
            default: Date.now
        },
        likes: {
            type: Number,
            required: true
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    }
);

const Post = model('Post', postSchema);

module.exports = Post;
