import React, { createContext, useState, VFC } from 'react';
import { Box, Button, Input, Stack } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createApolloClient } from '../client';

export const ApolloClientContext = createContext<ApolloClient<InMemoryCache>>(
  null
);

const Token: VFC = () => {
  const [inputType, setInputType] = useState<string>('text');

  const [token, setToken] = useState<string>('');
  const handleChange = (event) => setToken(event.target.value);

  const [client, setClient] = useState<ApolloClient<InMemoryCache>>(null);

  const handleSave = (event) => {
    const client = createApolloClient(token);
    // console.log({ token, client });
    setClient(client);
    setInputType('password');
  };

  const handleClear = (event) => {
    setClient(null);
    setInputType('text');
  };

  return (
    <ApolloClientContext.Provider value={client}>
      <Box>
        <Stack direction="row" spacing={4}>
          <Input
            type={inputType}
            value={token}
            onChange={handleChange}
            placeholder="Type your github access token"
            disabled={client != null}
          />
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={handleSave}
            disabled={client != null || token == ''}
          >
            Save
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={handleClear}
            disabled={client == null}
          >
            Clear
          </Button>
        </Stack>
      </Box>
    </ApolloClientContext.Provider>
  );
};

export default Token;
