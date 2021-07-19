import React, { createContext, useState, VFC } from 'react';
import { Heading } from '@chakra-ui/react';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';

import Token from '../organisms/Token';
// import QueryUser from '../organisms/QueryUser';
import QueryViewer from '../organisms/QueryViewer';

export const ApolloClientContext = createContext<
  ApolloClient<NormalizedCacheObject>
>(null);

const Graphql: VFC = () => {
  const [apolloClient, setApolloClient] = useState<
    ApolloClient<NormalizedCacheObject>
  >(null);

  return (
    <ApolloClientContext.Provider value={apolloClient}>
      <Heading as="h1">GraphQL</Heading>
      <Token apolloClient={apolloClient} setApolloClient={setApolloClient} />
      {apolloClient && (
        <ApolloProvider client={apolloClient}>
          <QueryViewer />
        </ApolloProvider>
      )}
      {/* <QueryUser /> */}
    </ApolloClientContext.Provider>
  );
};

export default Graphql;
