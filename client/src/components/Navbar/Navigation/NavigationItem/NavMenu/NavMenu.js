import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './NavMenuStyles';
import { Button, Menu, MenuItem, Fade } from '@material-ui/core';

import * as LANGUAGE_HELPER from '../../../../../constants/languageHelper/languageHelper.json';
import { checkLanguage } from '../../../../../constants/languageHelper/checkLanguageHelper';
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

  let languageHelper = checkLanguage(language, LANGUAGE_HELPER);

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
          {languageHelper.ENGLISH}
        </MenuItem>
        <MenuItem
          onClick={() => clickLanguageHandler(1)}
          selected={Boolean(language)}
        >
          {languageHelper.POLISH}
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default NavMenu;
