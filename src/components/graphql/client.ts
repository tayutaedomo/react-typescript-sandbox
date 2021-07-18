import { ApolloClient, InMemoryCache } from '@apollo/client';

let accessToken = '';
let apolloClient = null;

export const createApolloClient = (token): ApolloClient<InMemoryCache> => {
  accessToken = token;

  apolloClient = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: { authorization: `Bearer ${token}` },
    cache: new InMemoryCache(),
  });

  return apolloClient;
};
