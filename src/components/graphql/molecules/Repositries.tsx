import React, { VFC } from 'react';
import { List, ListItem, Text } from '@chakra-ui/react';

import { SearchResponse } from '../../../types/github';

type Props = {
  response: SearchResponse;
};

const Repositries: VFC<Props> = ({ response }) => {
  return (
    <List>
      {response.search.edges.map((edge) => (
        <ListItem key={edge.node.id}>
          <Text>{edge.node.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default Repositries;
