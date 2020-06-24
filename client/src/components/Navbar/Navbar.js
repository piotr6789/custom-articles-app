import React from 'react';

import useStyles from './NavbarStyles';
import { AppBar, Toolbar } from '@material-ui/core';
import Navigation from './Navigation/Navigation';

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} style={{ backgroundColor: '#2B2A31' }}>
      <Toolbar>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
