import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ArticleCreator from './components/ArticleCreator/ArticleCreator';
import Articles from './components/Articles/Articles/Articles';

import { MENU_ROUTES } from './constants/routes/routes';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={MENU_ROUTES.ARTICLES} component={Articles} />
        <Route path={MENU_ROUTES.ARTICLE_CREATOR} component={ArticleCreator} />
        <Redirect to={MENU_ROUTES.ARTICLES} />
      </Switch>
    </Layout>
  );
};

export default App;
