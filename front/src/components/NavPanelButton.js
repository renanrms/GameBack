
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import * as urls from '../constants/Urls';


export default function NavPanelButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const openIconMenu = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    return history.push(urls.PROFILE);
  }

  const handleLogout = () => {
    setAnchorEl(null);
    return history.push(urls.SIGNIN);
  }

  return (
    <>
      <IconButton
        onClick={handleMenu}
        color="inherit">
        <PersonIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openIconMenu}
        onClose={handleClose}
      >
        <MenuItem onClick={handleProfile}>Perfil</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
