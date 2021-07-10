import React, { useState, VFC } from 'react';
import { Box, Button, Typography } from '@material-ui/core';

import { usePrevious } from './hooks/usePrevious';

const UsePrevious: VFC = () => {
  const [value, setValue] = useState<number>(0);
  const lastValue = usePrevious(value);

  return (
    <Box py={2}>
      <Typography variant="h4">usePrevious</Typography>
      <p>
        Current: {value} - Previous: {lastValue}
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setValue(value + 1)}
      >
        Increment
      </Button>
    </Box>
  );
};

export default UsePrevious;
