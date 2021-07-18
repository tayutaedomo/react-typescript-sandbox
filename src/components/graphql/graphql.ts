import { gql } from '@apollo/client';

export const ME = gql`
  query me($login: String!) {
    user(login: $login) {
      name
      avatarUrl
    }
  }
`;
