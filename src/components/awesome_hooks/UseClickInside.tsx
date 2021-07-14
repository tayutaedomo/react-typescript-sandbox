import React, { VFC, useRef } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useClickInside } from './hooks/useClick';

type HitBoxProps = {
  onClickInside: () => void;
};

const HitBox: VFC<HitBoxProps> = ({ onClickInside }) => {
  const clickRef = useRef<HTMLButtonElement>();
  useClickInside(clickRef, onClickInside);

  return (
    <Button ref={clickRef} variant="contained" color="primary">
      Hit the box!
    </Button>
  );
};

const UseClickInside: VFC = () => {
  return (
    <Box py={2}>
      <Typography variant="h5">3: useClickInside</Typography>
      <HitBox onClickInside={() => alert('Hit the box!')} />
    </Box>
  );
};

export default UseClickInside;
