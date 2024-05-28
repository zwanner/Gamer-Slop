import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SLOP = gql`
  mutation addSlop($slopText: String!) {
    addSlop(slopText: $slopText) {
      _id
      slopText
      slopAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($slopId: ID!, $commentText: String!) {
    addComment(slopId: $slopId, commentText: $commentText) {
      _id
      slopText
      slopAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

