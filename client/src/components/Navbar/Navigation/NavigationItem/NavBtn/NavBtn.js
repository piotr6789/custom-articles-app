import React from 'react';

import useStyles from './NavBtnStyles';
import { Button } from '@material-ui/core';

const NavigationBtn = (props) => {
  const classes = useStyles();

  return <Button className={classes.root}>{props.children}</Button>;
};

export default NavigationBtn;
