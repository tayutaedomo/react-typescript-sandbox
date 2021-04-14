import React, { VFC } from 'react';
import UserCard from './UserCard';

const user = {
  id: 1,
  name: 'Taro',
  email: 'aaa@example.com',
  address: 'ADDRESS',
};

const CustomHook: VFC = () => {
  return (
    <div>
      <UserCard user={user} />
    </div>
  );
};

export default CustomHook;
