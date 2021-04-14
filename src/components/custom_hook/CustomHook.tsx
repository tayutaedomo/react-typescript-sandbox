import React, { useState, VFC } from 'react';
import axios from 'axios';

import { User } from '../../types/api/user';
import UserCard from './UserCard';
import { UserProfile } from '../../types/userProfile';

const CustomHook: VFC = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchData = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));

        setUserProfiles(data);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
