import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../assets/logo.svg'; // Ensure the path is correct
import { openCoins } from '../services/handyServices';
const Header = () => {
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <img src={Logo} alt="Logo" style={{ marginRight: 'auto', height: '50px' }} />
        <Button variant='contained' onClick={openCoins}>Open Coins</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
