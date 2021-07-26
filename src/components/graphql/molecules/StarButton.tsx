import { Button } from '@chakra-ui/react';
import React, { VFC } from 'react';

type Props = {
  totalCount: number;
  hasStarted: boolean;
};

const StarButton: VFC<Props> = ({ totalCount, hasStarted }) => {
  const starCount = totalCount === 1 ? '1 star' : `${totalCount} stars`;
  const viewerStarred = hasStarted ? 'starred' : '-';

  return (
    <Button variant="outline" colorScheme="teal" size="xs">
      {starCount} | {viewerStarred}
    </Button>
  );
};

export default StarButton;
