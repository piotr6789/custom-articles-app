import React from 'react';

import useStyles from './ArticleBodyStyles';
import { Card, CardContent, Button, Typography } from '@material-ui/core';

const ArticleBody = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>{props.title}</Typography>
        <Typography className={classes.content}>{props.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleBody;
