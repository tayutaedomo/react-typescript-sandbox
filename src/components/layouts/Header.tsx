import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  const history = useHistory();

  const onLinkClick = () => {
    history.push('/');
  };

  return (
    <header>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <div style={{ cursor: 'pointer' }} onClick={onLinkClick}>
              React Typescript Sandbox
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
