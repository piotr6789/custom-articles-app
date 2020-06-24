import React from 'react';
import { withRouter } from 'react-router-dom';

import useStyles from './NavBtnStyles';
import { Button } from '@material-ui/core';

const NavigationBtn = (props) => {
  const classes = useStyles();

  const clickHandler = () => {
    props.history.push(props.route);
  };

  return (
    <Button className={classes.root} onClick={() => clickHandler()}>
      {props.children}
    </Button>
  );
};

export default withRouter(NavigationBtn);
