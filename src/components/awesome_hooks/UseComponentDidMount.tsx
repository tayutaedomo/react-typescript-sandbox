import React, { VFC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useComponentDidMount } from './hooks/useComponent';

const UseComponentDidMount: VFC = () => {
  useComponentDidMount(() => {
    console.log('This component has been mounted.');
  });

  return (
    <Box py={2}>
      <Typography variant="h5">7: useCompnentDidMount</Typography>
      <Typography>Check your browser console.</Typography>
    </Box>
  );
};

export default UseComponentDidMount;
