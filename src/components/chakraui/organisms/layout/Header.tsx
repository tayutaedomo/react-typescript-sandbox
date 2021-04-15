import { memo, useCallback, VFC } from 'react';
import { useHistory } from 'react-router';
import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';

import MenuIconButton from '../../atoms/button/MenuIconButton';
import MenuDrawer from '../../molecules/MenuDrawer';
import { useAuth } from '../../hooks/useAuth';

const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const { logout } = useAuth();

  const onClickHome = useCallback(() => {
    history.push('/chakraui/home');
  }, [history]);

  const onClickUsers = useCallback(() => {
    history.push('/chakraui/home/user_management');
  }, [history]);

  const onClickSetting = useCallback(() => {
    history.push('/chakraui/home/setting');
  }, [history]);

  const onClickLogout = useCallback(() => logout(), [logout]);

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
            User Management App
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link onClick={onClickUsers}>Users</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickSetting}>Setting</Link>
          </Box>
          <Link onClick={onClickLogout}>Logout</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUsers={onClickUsers}
        onClickSetting={onClickSetting}
        onClickLogout={onClickLogout}
      />
    </>
  );
});

export default Header;
