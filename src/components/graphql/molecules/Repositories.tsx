import React, { VFC } from 'react';
import { Box, List, ListItem } from '@chakra-ui/react';

import { SearchResponse } from '../../../types/github';
import ResultTitle from '../atoms/ResultTitle';
import ResultItem from './ResultItem';
import NextButton from '../atoms/NextButton';

type Props = {
  response: SearchResponse;
  goNext: (endCursor: string) => void;
};

const Repositories: VFC<Props> = ({ response, goNext }) => {
  return (
    <Box my="2">
      <ResultTitle count={response.search.repositoryCount} />
      <List>
        {response.search.edges.map((edge) => (
          <ListItem key={edge.node.id}>
            <ResultItem node={edge.node} />
          </ListItem>
        ))}
      </List>
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
