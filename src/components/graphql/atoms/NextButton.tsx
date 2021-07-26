import React, { VFC } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  hasNext: boolean;
  onClick: () => void;
};

const NextButton: VFC<Props> = ({ hasNext, onClick }) => {
  if (!hasNext) return <></>;

  return (
    <Button variant="solid" colorScheme="teal" size="xs" onClick={onClick}>
      Next
    </Button>
  );
};

export default NextButton;
