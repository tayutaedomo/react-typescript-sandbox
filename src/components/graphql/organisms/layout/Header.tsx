import React, { VFC } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const Header: VFC = () => {
  const history = useHistory();

  const onClickHome = () => {
    history.push('/');
  };

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            React Sandbox
          </Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
