import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './NavMenuStyles';
import { Button, Menu, MenuItem, Fade } from '@material-ui/core';

import * as LANGUAGE_HELPER from '../../../../../constants/languageHelper/languageHelper';
import * as languageActions from '../../../../../store/actions/index';

const NavMenu = (props) => {
  const classes = useStyles();

  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const clickBtnHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const clickLanguageHandler = (languageId) => {
    setAnchorEl(null);
    dispatch(languageActions.changeLanguage(languageId));
  };

  const cancelLanguageHandler = () => {
    setAnchorEl(null);
  };

  let languageType = '';
  if (language === 0) {
    languageType = 'ENG';
  } else {
    languageType = 'PL';
  }

  return (
    <Fragment>
      <Button className={classes.root} onClick={clickBtnHandler}>
        {props.children}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={cancelLanguageHandler}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => clickLanguageHandler(0)}
          selected={!Boolean(language)}
        >
          {LANGUAGE_HELPER.LANGUAGE_MENU_TRANSLATION[languageType].ENGLISH}
        </MenuItem>
        <MenuItem
          onClick={() => clickLanguageHandler(1)}
          selected={Boolean(language)}
        >
          {LANGUAGE_HELPER.LANGUAGE_MENU_TRANSLATION[languageType].POLISH}
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default NavMenu;
