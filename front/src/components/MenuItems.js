import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import List from '@material-ui/core/List';

import * as options from '../constants/MenuOptions';


function MenuItems({ updateContent }) {
  return (
    <List>
      <ListItem button onClick={() => (updateContent(options.RULES))}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Regras" />
      </ListItem>

      <ListItem button onClick={() => (updateContent(options.EVENTS))}>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="Eventos" />
      </ListItem>

      {/* <ListItem button onClick={() => (updateContent(options.ITEMS))}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Itens" />
      </ListItem> */}

      <ListItem button onClick={() => (updateContent(options.PLAYERS))}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Jogadores" />
      </ListItem>

      <ListItem button onClick={() => (updateContent(options.STATES))}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Estados" />
      </ListItem>

      <ListItem button onClick={() => (updateContent(options.STATISTICS))}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Estatísticas" />
      </ListItem>
    </List>
  );
}


MenuItems.propTypes = {
  updateContent: PropTypes.func.isRequired
}


export default MenuItems;
