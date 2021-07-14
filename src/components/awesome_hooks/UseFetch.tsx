import React, { VFC } from 'react';
import { Box, Typography } from '@material-ui/core';

import { useFetch } from './hooks/useFetch';

const UseFetch: VFC = () => {
  const res = useFetch('https://jsonplaceholder.typicode.com/users/1', {});
  console.log(res.response);

  return (
    <Box py={2}>
      <Typography variant="h5">5: useFetch</Typography>
      {!res.response ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <Typography>Name: {res.response.name}</Typography>
          <Typography>Username: {res.response.username}</Typography>
        </>
      )}
    </Box>
  );
};

export default UseFetch;
