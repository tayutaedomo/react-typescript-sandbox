import React, { VFC } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_STAR } from '../graphql';
import StarStatus from '../atoms/StarStatus';

type Props = {
  totalCount: number;
  hasStarred: boolean;
  starrableId: string;
};

const StarButton: VFC<Props> = ({ totalCount, hasStarred, starrableId }) => {
  //const [addStar, { data }] = useMutation(ADD_STAR);
  const [addStar] = useMutation(ADD_STAR);

  const handleClick = async () => {
    //const response = await addStar({
    const response = await addStar({
      variables: { input: { starrableId: starrableId } },
    });
    //console.log({ response });
  };

  return (
    <StarStatus
      totalCount={totalCount}
      hasStarred={hasStarred}
      onClick={handleClick}
    />
  );
};

export default StarButton;
