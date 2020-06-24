import React, { Fragment } from 'react';

import classes from './Layout.module.css';
import Navbar from '../../components/Navbar/Navbar';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
