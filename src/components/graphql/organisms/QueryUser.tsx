import React, { useState, VFC } from 'react';
import { ApolloProvider } from '@apollo/client';
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

import { ApolloClientContext } from '../pages/Graphql';
import { ME } from '../graphql';

type UserType = {
  name: string;
  avatarUrl: string;
};

const QueryUser: VFC = () => {
  const [login, setLogin] = useState<string>('');
  const handleChange = (event) => setLogin(event.target.value);

  const [user, setUser] = useState<UserType>();

  const handleClick = async (event, apolloClient) => {
    try {
      const result = await apolloClient.query({
        query: ME,
        variables: { login },
      });

      setUser(result.data.user);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  return (
    <Box my="2">
      <Heading as="h2" size="md">
        Query User
      </Heading>
      <ApolloClientContext.Consumer>
        {(apolloClient) => {
          return !apolloClient ? (
            <></>
          ) : (
            <ApolloProvider client={apolloClient}>
              <Stack direction="row" spacing={4}>
                <Input
                  value={login}
                  onChange={handleChange}
                  placeholder="Input login name"
                  disabled={false}
                />
                <Button
                  isLoading={false}
                  loadingText="doing"
                  colorScheme="teal"
                  variant="solid"
                  onClick={(e) => handleClick(e, apolloClient)}
                  disabled={login === ''}
                >
                  Query
                </Button>
              </Stack>
            </ApolloProvider>
          );
        }}
      </ApolloClientContext.Consumer>
      {user ? (
        <>
          <Box>
            <Text>Name: {user.name}</Text>
          </Box>
          <Box>
            <Image src={user.avatarUrl} alt="User Avatar" boxSize="64" />
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default QueryUser;
