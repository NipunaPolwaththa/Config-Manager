import React from 'react';
import { Typography, Link } from '@mui/material';

function Footer() {
  const today = new Date();
  return (
    <div className="fixed text-xs text-center inset-x-0 bottom-0 font-bold bg-white text-[#062539]">
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        {today.getFullYear()}{' '}
        <Link color="inherit" href="https://zebra.com/">
          Zebra Technologies Inc. and its affiliates
        </Link>
        .
      </Typography>
    </div>
  );
}

export default Footer;
