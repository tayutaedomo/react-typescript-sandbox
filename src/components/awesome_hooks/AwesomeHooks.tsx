import React, { VFC } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AwesomeHooks: VFC = () => {
  return (
    <>
      <List>
        <Link to={''}>
          <ListItem>
            <ListItemText primary={'useTimeout'} />
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default AwesomeHooks;
