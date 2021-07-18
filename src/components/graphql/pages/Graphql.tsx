import React, { VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import Token from '../organisms/Token';

const Graphql: VFC = () => {
  return (
    <Box>
      <Heading as="h1">GraphQL</Heading>
      <Token />
    </Box>
  );
};

export default Graphql;
