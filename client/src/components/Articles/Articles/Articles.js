import React from 'react';
import { useSelector } from 'react-redux';

import useStyles from './ArticlesStyles';
import Grid from '@material-ui/core/Grid';
import ArticleBody from '../ArticleBody/ArticleBody';

import * as LANGUAGE_HELPER from '../../../constants/languageHelper/languageHelper.json';
import { checkLanguage } from '../../../constants/languageHelper/checkLanguageHelper';

const Articles = () => {
  const classes = useStyles();
  const articles = useSelector((state) => state.article.articles);
  const language = useSelector((state) => state.language.language);

  let languageHelper = checkLanguage(language, LANGUAGE_HELPER);

  let content = articles.length ? (
    <Grid container spacing={4}>
      {articles.map((art) => (
        <Grid item xs key={art.id}>
          <ArticleBody
            title={languageHelper.TITLE}
            content={languageHelper.DESCRIPTION}
          />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div className={classes.container}>
      <h1 className={classes.text}>{languageHelper.NO_ARTICLE}</h1>
    </div>
  );

  return content;
};

export default Articles;
