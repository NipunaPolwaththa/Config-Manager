import React from 'react';
import './layouts.css';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

function TopBar() {
  return (
    <NavLink to="/page/configSelection" className="hover:bg-[#55A4F2]">
      <Button sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
    </NavLink>
  );
}

export default TopBar;
