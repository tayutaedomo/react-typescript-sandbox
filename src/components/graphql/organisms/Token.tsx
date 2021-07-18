import React, { useState, VFC } from 'react';
import { Box, Button, Heading, Input, Stack } from '@chakra-ui/react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createApolloClient } from '../client';

type Props = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  setApolloClient: (client: ApolloClient<NormalizedCacheObject>) => void;
};

const Token: VFC<Props> = (props) => {
  const { apolloClient, setApolloClient } = props;

  const [inputType, setInputType] = useState<string>('text');

  const [token, setToken] = useState<string>('');
  const handleChange = (event) => setToken(event.target.value);

  const handleSave = (event) => {
    const client = createApolloClient(token);
    setApolloClient(client);
    setInputType('password');
  };

  const handleClear = (event) => {
    setApolloClient(null);
    setInputType('text');
  };

  return (
    <Box my="5">
      <Heading as="h2" size="md">
        Access Token
      </Heading>
      <Stack direction="row" spacing={4}>
        <Input
          type={inputType}
          value={token}
          onChange={handleChange}
          placeholder="Type your github access token"
          disabled={apolloClient !== null}
        />
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={handleSave}
          disabled={apolloClient !== null || token === ''}
        >
          Save
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={handleClear}
          disabled={apolloClient === null}
        >
          Clear
        </Button>
      </Stack>
    </Box>
  );
};

export default Token;
