import React, { createContext, useState, VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import Token from '../organisms/Token';
import User from '../organisms/User';

export const ApolloClientContext = createContext<
  ApolloClient<NormalizedCacheObject>
>(null);

const Graphql: VFC = () => {
  const [apolloClient, setApolloClient] = useState<
    ApolloClient<NormalizedCacheObject>
  >(null);

  return (
    <ApolloClientContext.Provider value={apolloClient}>
      <Box>
        <Heading as="h1">GraphQL</Heading>
        <Token apolloClient={apolloClient} setApolloClient={setApolloClient} />
      </Box>
    </ApolloClientContext.Provider>
  );
};

export default Graphql;
