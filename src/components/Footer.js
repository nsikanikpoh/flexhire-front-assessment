import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from '../styles/styles';

const Footer = () => {
  const year = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>
        {`© ${year}  All rights reserved`}
      </Typography>
    </Box>
  );
};

export default Footer;
