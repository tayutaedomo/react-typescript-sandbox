import React, { VFC } from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import { cards } from './Home';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

type Props = {
  open: boolean;
  onClose: () => void;
};

const MenuDrawer: VFC<Props> = (props) => {
  const { open, onClose } = props;
  const history = useHistory();

  const renderLink = (to: string) => {
    return <NavLink to={to}></NavLink>;
  };

  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <div>
        <IconButton onClick={onClose}>X</IconButton>
      </div>
      <Divider />
      <List>
        {cards.map((card) => (
          <NavLink to={card.to}>
            <ListItem button key={card.to}>
              <ListItemText primary={card.headline} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
