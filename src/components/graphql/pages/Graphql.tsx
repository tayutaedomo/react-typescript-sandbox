import React, { createContext, useState, VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import Token from '../organisms/Token';
import QueryUser from '../organisms/QueryUser';

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
        <QueryUser />
      </Box>
    </ApolloClientContext.Provider>
  );
};

export default Graphql;
