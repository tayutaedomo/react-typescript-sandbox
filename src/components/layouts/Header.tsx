import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <header>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Link to="/">React Typescript Sandbox</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
