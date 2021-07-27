import { Flex, Image, Text } from '@chakra-ui/react';
import React, { VFC } from 'react';

type PropsType = {
  name?: string;
  login?: string;
  avatarUrl: string;
};

const User: VFC<PropsType> = ({ name, login, avatarUrl }) => {
  return (
    <Flex>
      {name && <Text>Name: {name}</Text>}
      {login && <Text>Login: {login}</Text>}
      <Image src={avatarUrl} alt="Avatar Image" boxSize="16" mx="2" />
    </Flex>
  );
};

export default User;
