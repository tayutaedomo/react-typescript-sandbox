import { memo, VFC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/layout';

import UserCard from '../organisms/user/UserCard';

const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="Taro"
          fullName="Yamada Taro"
        />
      </WrapItem>
    </Wrap>
  );
});

export default UserManagement;
