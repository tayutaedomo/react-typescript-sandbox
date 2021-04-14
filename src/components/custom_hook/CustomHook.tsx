import React, { VFC } from 'react';

import UserCard from './UserCard';
import { useAllUsers } from './hooks/useAllUsers';

const CustomHook: VFC = () => {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchData = () => getUsers();

  return (
    <div>
      <button onClick={onClickFetchData}>Fetch</button>
      <br />
      {error ? (
        <p style={{ color: 'red' }}>Data fetching is failed.</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
};

export default CustomHook;
