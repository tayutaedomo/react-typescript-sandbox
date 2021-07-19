import { gql } from '@apollo/client';

export const USER = gql`
  query user($login: String!) {
    user(login: $login) {
      name
      avatarUrl
    }
  }
`;

export const VIEWER = gql`
  query viewer {
    viewer {
      login
      avatarUrl
    }
  }
`;
