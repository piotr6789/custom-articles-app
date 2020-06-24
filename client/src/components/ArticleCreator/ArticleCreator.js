import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './ArticleCreatorStyles';
import { Card, CardContent, Button, Typography } from '@material-ui/core';

import * as componentActions from '../../store/actions/index';
import * as LANGUAGE_HELPER from '../../constants/languageHelper/languageHelper';

const ArticleCreator = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const addArticleHandler = () => {
    const newArticle = { id: Math.random(), name: 'article' };
    dispatch(componentActions.addArticle(newArticle, props.history));
  };

  let languageType = '';
  if (language === 0) {
    languageType = 'ENG';
  } else {
    languageType = 'PL';
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          {LANGUAGE_HELPER.ARTICLE_CREATOR_TRANSLATION[languageType].TITLE}
        </Typography>
        <Typography className={classes.content}>
          {
            LANGUAGE_HELPER.ARTICLE_CREATOR_TRANSLATION[languageType]
              .DESCRIPTION
          }
        </Typography>
      </CardContent>
      <Button onClick={addArticleHandler}>
        {LANGUAGE_HELPER.ARTICLE_CREATOR_TRANSLATION[languageType].CREATE}
      </Button>
    </Card>
  );
};

export default ArticleCreator;
