import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      slops {
        _id
        slopText
        createdAt
      }
    }
  }
`;

export const QUERY_SLOPS = gql`
  query getSlos {
    slops {
      _id
      slopText
      slopAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_SLOP = gql`
  query getSingleSlop($slopId: ID!) {
    slop(slopId: $slopId) {
      _id
      slopText
      slopAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      slops {
        _id
        slopText
        slopAuthor
        createdAt
      }
    }
  }
`;

