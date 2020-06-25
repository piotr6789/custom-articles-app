import React from 'react';

import useStyles from './ArticleBodyStyles';
import { Card, CardContent, Typography } from '@material-ui/core';

const ArticleBody = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>{props.title}</Typography>
        <Typography>{props.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleBody;
