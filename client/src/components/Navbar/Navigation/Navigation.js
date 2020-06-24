import React, { Fragment } from 'react';

import NavBtn from './NavigationItem/NavBtn/NavBtn';
import NavMenu from './NavigationItem/NavMenu/NavMenu';

import { MENU_ROUTES } from '../../../constants/routes/routes';

const Navigation = () => {
  return (
    <Fragment>
      <NavBtn route={MENU_ROUTES.HOME}>Home</NavBtn>
      <NavBtn route={MENU_ROUTES.ARTICLES}>Articles</NavBtn>
      <NavMenu>Language</NavMenu>
    </Fragment>
  );
};

export default Navigation;
