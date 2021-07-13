import React, { useRef, VFC } from 'react';
import { Box, Button, Typography } from '@material-ui/core';

import { useClickOutside } from './hooks/useClick';

type HitBoxProps = {
  onClickOutside: () => void;
};

const HitBox: VFC<HitBoxProps> = ({ onClickOutside }) => {
  const clickRef = useRef<HTMLButtonElement>();
  useClickOutside(clickRef, onClickOutside);

  return (
    <Button ref={clickRef} variant="contained" color="primary">
      Don't hit the box!
    </Button>
  );
};

const UseClickOutside: VFC = () => {
  return (
    <Box py={2}>
      <Typography variant="h4">useClickOutside</Typography>
      <HitBox onClickOutside={() => alert("Don't hit the box!")} />
    </Box>
  );
};

export default UseClickOutside;
