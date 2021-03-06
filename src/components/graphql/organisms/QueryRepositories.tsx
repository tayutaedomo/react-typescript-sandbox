import React, { useRef, useState, VFC } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react';

import { SEARCH_REPOSITORIES } from '../graphql';
import Repositories from '../molecules/Repositories';
import { SearchVariables } from '../../../types/github';

const PER_PAGE = 5;

const DEFAULT_VARIABLES: SearchVariables = {
  first: PER_PAGE,
  after: null,
  last: null,
  before: null,
  query: '',
};

const QueryRepositories: VFC = () => {
  const myRef = useRef<HTMLInputElement>();

  const [variables, setVariables] = useState<SearchVariables>(
    DEFAULT_VARIABLES
  );

  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: variables,
  });

  const handleClick = (e) => {
    setVariables({
      ...DEFAULT_VARIABLES,
      query: myRef.current.value,
    });
  };

  const goPrevious = (startCursor: string) => {
    setVariables({
      first: null,
      after: null,
      last: PER_PAGE,
      before: startCursor,
      query: variables.query,
    });
  };

  const goNext = (endCursor: string) => {
    setVariables({
      first: PER_PAGE,
      after: endCursor,
      last: null,
      before: null,
      query: variables.query,
    });
  };

  return (
    <Box my="4">
      <Heading as="h2" size="md">
        Query Repositories
      </Heading>
      <Stack direction="row">
        <Input ref={myRef} />
        <Button colorScheme="teal" variant="solid" onClick={handleClick}>
          Search
        </Button>
      </Stack>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <>
          {error ? (
            <Text>Query Failed</Text>
          ) : (
            <Repositories
              variables={variables}
              response={data}
              goPrevious={goPrevious}
              goNext={goNext}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default QueryRepositories;
