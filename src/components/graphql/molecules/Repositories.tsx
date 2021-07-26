import React, { VFC } from 'react';
import { Box, ListItem, Stack, UnorderedList } from '@chakra-ui/react';

import { SearchResponse } from '../../../types/github';
import ResultTitle from '../atoms/ResultTitle';
import ResultItem from './ResultItem';
import NextButton from '../atoms/NextButton';
import PreviousButton from '../atoms/PreviousButton';
import StarButton from './StarButton';

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
          <ListItem key={edge.node.id} py="1">
            <Stack direction="row" spacing="2">
              <ResultItem node={edge.node} />
              <StarButton totalCount={edge.node.stargazers.totalCount} />
            </Stack>
          </ListItem>
        ))}
      </UnorderedList>
      <Stack direction="row" spacing="1">
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
      </Stack>
    </Box>
  );
};

export default Repositories;
