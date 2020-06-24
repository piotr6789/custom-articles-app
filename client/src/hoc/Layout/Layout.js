import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as languageActions from '../../store/actions/index';

import classes from './Layout.module.css';
import Navbar from '../../components/Navbar/Navbar';

const Layout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(languageActions.checkLanguage());
  }, [dispatch]);

  return (
    <Fragment className={classes.Container}>
      <Navbar />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
