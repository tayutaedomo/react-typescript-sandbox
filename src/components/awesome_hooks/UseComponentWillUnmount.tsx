import React, { VFC } from 'react';
import { Box, Typography } from '@material-ui/core';

import { useComponentWillUnmount } from './hooks/useComponent';

const UseComponentWillUnmount: VFC = () => {
  useComponentWillUnmount(() => {
    console.log('This component will unmount.');
  });

  return (
    <Box py={2}>
      <Typography variant="h5">8: useComponentWillUnmount</Typography>
      <Typography>Check your browser console.</Typography>
    </Box>
  );
};

export default UseComponentWillUnmount;
