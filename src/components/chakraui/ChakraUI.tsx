import React, { VFC } from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';

import theme from './theme/theme';

const ChakraUI: VFC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">Button</Button>
    </ChakraProvider>
  );
};

export default ChakraUI;
