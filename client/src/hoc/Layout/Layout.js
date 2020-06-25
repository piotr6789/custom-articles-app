import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import classes from './Layout.module.css';
import Navbar from '../../components/Navbar/Navbar';

import * as languageActions from '../../store/actions/index';

const Layout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(languageActions.checkLanguage());
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
