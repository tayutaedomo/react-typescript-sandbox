import { Box, Button, Typography } from '@material-ui/core';
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Typography variant="h4">UseReducer</Typography>
      <Box>
        <Typography variant="h6">Count: {state.count}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          -
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </Button>
      </Box>
    </>
  );
};

export default UseReducer;
