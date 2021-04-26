import React, { VFC } from 'react';
import { Box, Divider } from '@material-ui/core';

import UseRef from './UseRef';
import UseReducer from './UseReducer';

const Practice3: VFC = () => {
  return (
    <Box py={2}>
      <UseRef />
      <Box py={4}>
        <Divider />
      </Box>
      <UseReducer />
    </Box>
  );
};

export default Practice3;
