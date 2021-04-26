import React, { VFC } from 'react';
import UseRef from './UseRef';
import { Box, Typography } from '@material-ui/core';

const Practice3: VFC = () => {
  return (
    <Box py={2}>
      <Typography variant="h3" gutterBottom>
        Practice3
      </Typography>
      <UseRef />
    </Box>
  );
};

export default Practice3;
