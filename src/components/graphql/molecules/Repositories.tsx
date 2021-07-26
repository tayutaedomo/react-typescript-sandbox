import React, { VFC } from 'react';
import { Box, List, ListItem, UnorderedList } from '@chakra-ui/react';

import { SearchResponse } from '../../../types/github';
import ResultTitle from '../atoms/ResultTitle';
import ResultItem from './ResultItem';
import NextButton from '../atoms/NextButton';
import PreviousButton from '../atoms/PreviousButton';

type Props = {
  response: SearchResponse;
  goPrevious: (startCursor: string) => void;
  goNext: (endCursor: string) => void;
};

const Repositories: VFC<Props> = ({ response, goNext, goPrevious }) => {
  return (
    <Box my="2">
      <ResultTitle count={response.search.repositoryCount} />
      <UnorderedList>
        {response.search.edges.map((edge) => (
          <ListItem key={edge.node.id}>
            <ResultItem node={edge.node} />
          </ListItem>
        ))}
      </UnorderedList>
      <PreviousButton
        hasPrevious={response.search.pageInfo.hasPreviousPage}
        onClick={() => {
          goPrevious(response.search.pageInfo.startCursor);
        }}
      />
      <NextButton
        hasNext={response.search.pageInfo.hasNextPage}
        onClick={() => {
          goNext(response.search.pageInfo.endCursor);
        }}
      />
    </Box>
  );
};

export default Repositories;
