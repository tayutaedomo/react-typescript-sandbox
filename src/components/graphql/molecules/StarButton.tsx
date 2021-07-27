import React, { VFC } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_STAR, REMOVE_STAR, SEARCH_REPOSITORIES } from '../graphql';
import { SearchVariables } from '../../../types/github';
import StarStatus from '../atoms/StarStatus';

type Props = {
  searchVariables: SearchVariables;
  totalCount: number;
  hasStarred: boolean;
  starrableId: string;
};

const StarButton: VFC<Props> = ({
  searchVariables,
  totalCount,
  hasStarred,
  starrableId,
}) => {
  //const [addStar, { data }] = useMutation(ADD_STAR);
  //const [addStar] = useMutation(ADD_STAR);
  const [addOrRemoveStar] = useMutation(hasStarred ? REMOVE_STAR : ADD_STAR);

  const handleClick = async () => {
    await addOrRemoveStar({
      variables: { input: { starrableId: starrableId } },
      //   refetchQueries: [
      //     {
      //       query: SEARCH_REPOSITORIES,
      //       variables: { ...searchVariables },
      //     },
      //   ],
      refetchQueries: (mutationResult) => {
        console.log({ mutationResult });
        return [
          {
            query: SEARCH_REPOSITORIES,
            variables: { ...searchVariables },
          },
        ];
      },
    });
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
