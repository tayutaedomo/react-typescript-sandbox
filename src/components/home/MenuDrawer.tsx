import React, { VFC } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';

import { cards } from './Home';
import { NavLink } from 'react-router-dom';

type Props = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const MenuDrawer: VFC<Props> = (props) => {
  const { open, onOpen, onClose } = props;

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Divider />
      <List>
        {cards
          .slice()
          .reverse()
          .map((card) => (
            <NavLink key={card.to} to={card.to}>
              <ListItem button>
                <ListItemText primary={card.headline} />
              </ListItem>
            </NavLink>
          ))}
      </List>
    </SwipeableDrawer>
  );
};

export default MenuDrawer;
