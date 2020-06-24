import React from 'react';
import { useSelector } from 'react-redux';

import useStyles from './ArticlesStyles';
import Grid from '@material-ui/core/Grid';

import ArticleBody from '../ArticleBody/ArticleBody';

const Articles = () => {
  const classes = useStyles();
  const articles = useSelector((state) => state.article.articles);

  let content = articles.length ? (
    <Grid container spacing={4}>
      {articles.map((art) => (
        <Grid item xs key={art.id}>
          <ArticleBody title="Article" content="Description" />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div className={classes.container}>
      <h1 className={classes.text}>Add some articles</h1>
    </div>
  );

  return content;
};

export default Articles;
