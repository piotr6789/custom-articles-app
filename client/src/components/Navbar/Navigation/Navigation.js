import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import NavBtn from './NavigationItem/NavBtn/NavBtn';
import NavMenu from './NavigationItem/NavMenu/NavMenu';

import { MENU_ROUTES } from '../../../constants/routes/routes';
import * as LANGUAGE_HELPER from '../../../constants/languageHelper/languageHelper';

const Navigation = (props) => {
  const language = useSelector((state) => state.language.language);

  let languageType = '';
  if (language === 0) {
    languageType = 'ENG';
  } else {
    languageType = 'PL';
  }

  return (
    <Fragment>
      <NavBtn route={MENU_ROUTES.ARTICLES}>
        {LANGUAGE_HELPER.NAVBAR_ITEM_TRANSLATION[languageType].ARTICLES}
      </NavBtn>
      <NavBtn route={MENU_ROUTES.ARTICLE_CREATOR}>
        {LANGUAGE_HELPER.NAVBAR_ITEM_TRANSLATION[languageType].NEW_ARTICLE}
      </NavBtn>
      <NavMenu languageType={languageType}>
        {LANGUAGE_HELPER.NAVBAR_ITEM_TRANSLATION[languageType].LANGUAGE}
      </NavMenu>
    </Fragment>
  );
};

export default Navigation;
