import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = (token) => {
  return new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: { authorization: `Bearer ${token}` },
    cache: new InMemoryCache(),
  });
};
