import React, { useState, VFC } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Heading, Input, Text } from '@chakra-ui/react';

import { SEARCH_REPOSITORIES } from '../graphql';
import Repositries from '../molecules/Repositries';

type Variables = {
  first?: number;
  after?: string;
  last?: number;
  before?: string;
  query: string;
};

const DEFAULT_VARIABLES: Variables = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: 'フロントエンドエンジニア',
};

const QueryRepositories: VFC = () => {
  const [variables, setVariables] = useState<Variables>(DEFAULT_VARIABLES);

  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: variables,
  });

  const handleChange = (e) => {
    setVariables({
      ...DEFAULT_VARIABLES,
      query: e.target.value,
    });
  };

  return (
    <Box my="4">
      <Heading as="h2" size="md">
        Query Repositories
      </Heading>
      <Input value={variables.query} onChange={handleChange} />
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <>
          {error ? <Text>Query Failed</Text> : <Repositries response={data} />}
        </>
      )}
    </Box>
  );
};

export default QueryRepositories;
