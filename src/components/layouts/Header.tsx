import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from '../home/MenuDrawer';

const Header = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const onLinkClick = () => {
    history.push('/');
  };

  const onDrawerOpen = () => {
    setOpen(true);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            <div style={{ cursor: 'pointer' }} onClick={onLinkClick}>
              React Typescript Sandbox
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} onClose={onDrawerClose} />
    </header>
  );
};

export default Header;
