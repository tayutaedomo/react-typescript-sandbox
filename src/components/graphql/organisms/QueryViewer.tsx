import React, { VFC } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Heading, Text } from '@chakra-ui/react';

import { VIEWER } from '../graphql';
import User from '../molecules/User';

const QueryViewer: VFC = () => {
  const { loading, error, data } = useQuery(VIEWER);

  return (
    <Box my="4">
      <Heading as="h2" size="md">
        Query Viewer
      </Heading>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <>
          {error ? (
            <Text>Query Failed</Text>
          ) : (
            <>
              <User
                login={data.viewer.login}
                avatarUrl={data.viewer.avatarUrl}
              />
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default QueryViewer;
