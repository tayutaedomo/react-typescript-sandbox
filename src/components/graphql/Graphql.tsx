import React, { VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import GetStarted from './pages/GetStarted';

const Graphql: VFC = () => {
  return (
    <Box>
      <Heading as="h1">GraphQL</Heading>
      <GetStarted />
    </Box>
  );
};

export default Graphql;
