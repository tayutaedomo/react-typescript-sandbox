import { Button } from '@chakra-ui/react';
import React, { VFC } from 'react';

type Props = {
  totalCount: number;
};

const StarButton: VFC<Props> = ({ totalCount }) => {
  const text = totalCount === 1 ? '1 star' : `${totalCount} stars`;

  return (
    <Button variant="outline" colorScheme="teal" size="xs">
      {text}
    </Button>
  );
};

export default StarButton;
