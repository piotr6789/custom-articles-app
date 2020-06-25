import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import NavBtn from './NavigationItem/NavBtn/NavBtn';
import NavMenu from './NavigationItem/NavMenu/NavMenu';

import { MENU_ROUTES } from '../../../constants/routes/routes';
import * as LANGUAGE_HELPER from '../../../constants/languageHelper/languageHelper.json';

const Navigation = (props) => {
  const language = useSelector((state) => state.language.language);

  let languageHelper = null;
  if (language === 0) {
    languageHelper = LANGUAGE_HELPER.ENG;
  } else {
    languageHelper = LANGUAGE_HELPER.PL;
  }

  return (
    <Fragment>
      <NavBtn route={MENU_ROUTES.ARTICLES}>{languageHelper.ARTICLES}</NavBtn>
      <NavBtn route={MENU_ROUTES.ARTICLE_CREATOR}>
        {languageHelper.NEW_ARTICLE}
      </NavBtn>
      <NavMenu>{languageHelper.LANGUAGE}</NavMenu>
    </Fragment>
  );
};

export default Navigation;
