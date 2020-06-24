import React, { Fragment } from 'react';

import useStyles from './NavMenuStyles';
import { Button, Menu, MenuItem, Fade } from '@material-ui/core';

const NavMenu = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button className={classes.root} onClick={handleClick}>
        {props.children}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Polish</MenuItem>
        <MenuItem onClick={handleClose}>English</MenuItem>
      </Menu>
    </Fragment>
  );
};

export default NavMenu;
