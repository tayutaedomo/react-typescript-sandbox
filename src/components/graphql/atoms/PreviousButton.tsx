import React, { VFC } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  hasPrevious: boolean;
  onClick: () => void;
};

const PreviousButton: VFC<Props> = ({ hasPrevious, onClick }) => {
  if (!hasPrevious) return <></>;

  return (
    <Button variant="solid" colorScheme="teal" size="xs" onClick={onClick}>
      Previous
    </Button>
  );
};

export default PreviousButton;
