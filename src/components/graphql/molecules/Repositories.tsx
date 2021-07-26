import React, { VFC } from 'react';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';

import { SearchResponse } from '../../../types/github';
import ResultTitle from '../atoms/ResultTitle';

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
            <Text>{edge.node.name}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Repositories;
