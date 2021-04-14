import React, { ReactNode, VFC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../components/chakraui/theme/theme';

type Props = {
  children: ReactNode;
};

const ChakraUIProvider: VFC<Props> = (props) => {
  const { children } = props;

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraUIProvider;
