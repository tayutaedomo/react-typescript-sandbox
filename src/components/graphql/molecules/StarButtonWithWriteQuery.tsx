import React, { VFC } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_STAR, REMOVE_STAR, SEARCH_REPOSITORIES } from '../graphql';
import { SearchResponse, SearchVariables, Edge } from '../../../types/github';
import StarStatus from '../atoms/StarStatus';
import { useState } from 'react';

type Props = {
  searchVariables: SearchVariables;
  totalCount: number;
  hasStarred: boolean;
  starrableId: string;
};

const StarButtonWithWriteQuery: VFC<Props> = ({
  searchVariables,
  totalCount,
  hasStarred,
  starrableId,
}) => {
  const [count, setCount] = useState(totalCount);
  const [addOrRemoveStar] = useMutation(hasStarred ? REMOVE_STAR : ADD_STAR);

  const handleClick = async () => {
    await addOrRemoveStar({
      variables: { input: { starrableId: starrableId } },
      update: (cache, { data: { addStar, removeStar } }) => {
        const { starrable } = addStar || removeStar;
        const data: SearchResponse = cache.readQuery({
          query: SEARCH_REPOSITORIES,
          variables: { ...searchVariables },
        });
        const edges = data.search.edges;
        const newEdges = edges.map((edge) => {
          if (edge.node.id === starrableId) {
            const diff = starrable.viewerHasStarred ? 1 : -1;
            const newTotalCount = edge.node.stargazers.totalCount + diff;
            const newEdge: Edge = {
              cursor: edge.cursor,
              node: {
                id: edge.node.id,
                name: edge.node.name,
                url: edge.node.url,
                viewerHasStarred: starrable.viewerHasStarred,
                stargazers: { totalCount: newTotalCount },
              },
            };
            setCount(newTotalCount);
            return newEdge;
          } else {
            return edge;
          }
        });
        const newData: SearchResponse = {
          search: {
            edges: newEdges,
            pageInfo: data.search.pageInfo,
            repositoryCount: data.search.repositoryCount,
          },
        };
        cache.writeQuery({
          query: SEARCH_REPOSITORIES,
          data: newData,
        });
      },
    });
  };

  return (
    <StarStatus
      totalCount={count}
      hasStarred={hasStarred}
      onClick={handleClick}
    />
  );
};

export default StarButtonWithWriteQuery;
