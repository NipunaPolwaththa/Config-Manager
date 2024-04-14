/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopBar from './TopBar';
import Footer from './Footer';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function MainLayout(props) {
  const { children } = props;
  const [appBarColor, setAppBarColor] = useState('#3191ef');

  return (
    <Box>
      <CssBaseline />
      <Footer />
      <Box>
        <AppBar>
          <Toolbar sx={{ background: appBarColor }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/page/ConfigSelection"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            />
            <TopBar />
          </Toolbar>
        </AppBar>
      </Box>
      <div className="pt-16">{children}</div>
    </Box>
  );
}

export default MainLayout;
