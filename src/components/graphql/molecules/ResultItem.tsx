import React, { VFC } from 'react';
import { Link, ListItem, Text } from '@chakra-ui/react';

import { Node } from '../../../types/github';

type Props = {
  node: Node;
};

const ResultItem: VFC<Props> = ({ node }) => {
  return (
    <Text>
      <Link href={node.url} color="blue" isExternal={true}>
        {node.name}
      </Link>
    </Text>
  );
};

export default ResultItem;
