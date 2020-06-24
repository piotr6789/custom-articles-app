import React from 'react';
import { useDispatch } from 'react-redux';

import useStyles from './ArticleCreatorStyles';
import { Card, CardContent, Button, Typography } from '@material-ui/core';

import * as articleActions from '../../store/actions/index';

const ArticleCreator = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addArticleHandler = () => {
    const newArticle = { id: Math.random(), name: 'article' };
    dispatch(articleActions.addArticle(newArticle, props.history));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>New Article</Typography>
        <Typography className={classes.content}>Description</Typography>
      </CardContent>
      <Button onClick={addArticleHandler}>Create</Button>
    </Card>
  );
};

export default ArticleCreator;
