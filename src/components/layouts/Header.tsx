import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';

const Header = () => {
  return (
    <header>
      <AppBar>
        <Toolbar>
          <Link to="/">React Typescript Sandbox</Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
