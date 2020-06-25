import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './ArticleCreatorStyles';
import { Card, CardContent, Button, Typography } from '@material-ui/core';

import * as componentActions from '../../store/actions/index';
import * as LANGUAGE_HELPER from '../../constants/languageHelper/languageHelper.json';

const ArticleCreator = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const addArticleHandler = () => {
    const newArticle = { id: Math.random(), name: 'article' };
    dispatch(componentActions.addArticle(newArticle, props.history));
  };

  let languageHelper = null;
  if (language === 0) {
    languageHelper = LANGUAGE_HELPER.ENG;
  } else {
    languageHelper = LANGUAGE_HELPER.PL;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          {languageHelper.TITLE}
        </Typography>
        <Typography>{languageHelper.DESCRIPTION}</Typography>
      </CardContent>
      <Button onClick={addArticleHandler}>{languageHelper.CREATE}</Button>
    </Card>
  );
};

export default ArticleCreator;
