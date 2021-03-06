import React, { VFC } from 'react';
import { Box, Typography } from '@material-ui/core';

import { useTimeout } from './hooks/useTimeout';
import { useState } from 'react';

const UseTimeout: VFC = () => {
  const [nowText, setNowText] = useState<string>(new Date().toISOString());

  useTimeout(() => {
    const text = new Date().toISOString() + ', Updated';
    console.log(text);
    setNowText(text);
  }, 2000);

  return (
    <Box py={2}>
      <Typography variant="h5">1: useTimeout</Typography>
      <Typography>{nowText}</Typography>
    </Box>
  );
};

export default UseTimeout;
