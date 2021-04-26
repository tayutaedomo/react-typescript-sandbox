import { Box, Button, Typography } from '@material-ui/core';
import React, { useReducer } from 'react';

type StateType = { count: number };
const initialState: StateType = { count: 0 };

type ActionType = {
  type: 'decrement' | 'increment' | 'reset' | 'add';
  num?: number;
};

function reducer(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    case 'add':
      return { count: state.count + action.num };
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
          onClick={() => dispatch({ type: 'add', num: -5 })}
        >
          -5
        </Button>
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: 'add', num: 5 })}
        >
          +5
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </Button>
      </Box>
    </>
  );
};

export default UseReducer;
