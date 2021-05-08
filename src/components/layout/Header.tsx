import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      // zIndex: theme.zIndex.drawer + 1,
      zIndex: theme.zIndex.modal + 1,
    },
  })
);

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

  const classes = useStyles();

  return (
    <header>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <MenuDrawer
            open={open}
            onOpen={onDrawerOpen}
            onClose={onDrawerClose}
          />
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
