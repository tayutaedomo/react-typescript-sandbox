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

export const SEARCH_REPOSITORIES = gql`
  query searchRepositories(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $query: String!
  ) {
    search(
      first: $first
      after: $after
      last: $last
      before: $before
      query: $query
      type: REPOSITORY
    ) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ... on Repository {
            id
            name
            url
            stargazers {
              totalCount
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`;

export const ADD_STAR = gql`
  mutation addStar($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;
