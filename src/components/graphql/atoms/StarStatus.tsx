import React, { VFC } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  totalCount: number;
  hasStarred: boolean;
  onClick: () => void;
};

const StarStatus: VFC<Props> = ({ totalCount, hasStarred, onClick }) => {
  const starCount = totalCount === 1 ? '1 star' : `${totalCount} stars`;
  const viewerStarred = hasStarred ? 'starred' : '-';

  return (
    <Button variant="outline" colorScheme="teal" size="xs" onClick={onClick}>
      {starCount} | {viewerStarred}
    </Button>
  );
};

export default StarStatus;
