import React, { VFC, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useInterval } from './hooks/useTimeout';

const UseInterval: VFC = () => {
  const [resources, setResources] = useState<number>(0);

  useInterval(() => {
    setResources(resources + 2);
  }, 2500);

  return (
    <Box py={2}>
      <Typography variant="h5">6: useInterval</Typography>
      <Typography>Resources: {resources}</Typography>
    </Box>
  );
};

export default UseInterval;
