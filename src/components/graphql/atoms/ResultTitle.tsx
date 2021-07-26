import { Heading } from '@chakra-ui/react';
import React, { VFC } from 'react';

type Props = {
  count: number;
};

const ResultTitle: VFC<Props> = ({ count }) => {
  const unit = count === 1 ? 'Repository' : 'Repositories';
  const title = `Github Repositories Search Result - ${count} ${unit}`;
  return (
    <Heading as="h3" size="sm">
      {title}
    </Heading>
  );
};

export default ResultTitle;
