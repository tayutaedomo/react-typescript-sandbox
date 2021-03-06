import React, { useEffect, useRef, useState, VFC } from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';

const UseRef: VFC = () => {
  const initialVAlue: any = 0;
  const [value, setValue] = useState<number>(initialVAlue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };
  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  //const ref = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    // const current = ref.current;
    // if (current !== null) current.focus();
    // ref.current?.focus();
    ref.current.focus();
  };

  return (
    <>
      <Typography variant="h4">UseRef</Typography>
      <Box>
        <Typography variant="h6">Value: {value}</Typography>
        <Button variant="contained" color="primary" onClick={increment}>
          +1
        </Button>
        <Button variant="outlined" color="default" onClick={decrement}>
          -1
        </Button>
        <Typography color="textSecondary">
          This component was re-rendered {renderTimes.current} times!
        </Typography>
      </Box>
      <Box mt={2}>
        <TextField inputRef={ref} />
        <Button variant="contained" onClick={focusInput}>
          Focus to input!
        </Button>
      </Box>
    </>
  );
};

export default UseRef;
