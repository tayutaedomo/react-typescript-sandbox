import React, { VFC } from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';

const ChakraUI: VFC = () => {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">Button</Button>
    </ChakraProvider>
  );
};

export default ChakraUI;
