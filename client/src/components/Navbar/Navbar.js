import React from 'react';

import useStyles from './NavbarStyles';
import { AppBar, Toolbar } from '@material-ui/core';
import Navigation from './Navigation/Navigation';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
