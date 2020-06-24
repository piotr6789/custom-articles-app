import React, { Fragment } from 'react';

import NavBtn from './NavigationItem/NavBtn/NavBtn';
import NavMenu from './NavigationItem/NavMenu/NavMenu';

const Navigation = () => {
  return (
    <Fragment>
      <NavBtn>Home</NavBtn>
      <NavBtn>Articles</NavBtn>
      <NavMenu>Language</NavMenu>
    </Fragment>
  );
};

export default Navigation;
