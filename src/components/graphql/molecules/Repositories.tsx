import React, { VFC } from 'react';
import { Box, List, ListItem } from '@chakra-ui/react';

import { SearchResponse } from '../../../types/github';
import ResultTitle from '../atoms/ResultTitle';
import ResultItem from './ResultItem';

type Props = {
  response: SearchResponse;
};

const Repositories: VFC<Props> = ({ response }) => {
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
    </Box>
  );
};

export default Repositories;
