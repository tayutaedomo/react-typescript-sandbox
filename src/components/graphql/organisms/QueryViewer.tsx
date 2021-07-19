import React, { VFC } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { VIEWER } from '../graphql';

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
            <Flex>
              <Text>Login: {data.viewer.login}</Text>
              <Image
                src={data.viewer.avatarUrl}
                alt="User Avatar"
                boxSize="16"
                mx="2"
              />
            </Flex>
          )}
        </>
      )}
    </Box>
  );
};

export default QueryViewer;
