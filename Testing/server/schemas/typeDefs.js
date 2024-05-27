const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    slops: [Slop]!
  }

  type Slop {
    _id: ID
    slopText: String
    slopAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    slops(username: String): [Slop]
    slop(slopId: ID!): Slop
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSlop(slopText: String!): Slop
    addComment(slopId: ID!, commentText: String!): Slop
    removeSlop(slopId: ID!): Slop
    removeComment(slopId: ID!, commentId: ID!): Slop
  }
`;

module.exports = typeDefs;
