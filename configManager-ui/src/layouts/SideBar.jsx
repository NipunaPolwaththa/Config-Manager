import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './layouts.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SourceIcon from '@mui/icons-material/Source';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

function SideBar({ open }) {
  return (
    <>
      <List>
        <NavLink to="/page/newPlugIn" className="hover:bg-[#55A4F2]">
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText
                primary="New Plug-in"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to="/page/user" className="hover:bg-[#55A4F2]">
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <FileOpenIcon />
              </ListItemIcon>
              <ListItemText primary="User" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to="/page/dashboard" className="hover:bg-[#55A4F2]">
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <SourceIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>

      <Divider />
    </>
  );
}

export default SideBar;
