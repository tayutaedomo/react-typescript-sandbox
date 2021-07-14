import React, { useState, useRef, VFC } from 'react';
import { Box, Button, Switch, Typography } from '@material-ui/core';

import { useClickOutside } from './hooks/useClick';

type HitBoxProps = {
  onClickOutside: () => void;
};

const HitBox: VFC<HitBoxProps> = ({ onClickOutside }) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const clickRef = useRef<HTMLButtonElement>();
  useClickOutside(clickRef, onClickOutside, disabled);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch
        checked={!disabled}
        onChange={handleChange}
        name="checked"
        color="primary"
      />
      <Button
        ref={clickRef}
        variant="contained"
        color="primary"
        disabled={disabled}
      >
        Don't hit the box!
      </Button>
    </>
  );
};

const UseClickOutside: VFC = () => {
  return (
    <Box py={2}>
      <Typography variant="h5">4: useClickOutside</Typography>
      <HitBox onClickOutside={() => alert("Don't hit the box!")} />
    </Box>
  );
};

export default UseClickOutside;
