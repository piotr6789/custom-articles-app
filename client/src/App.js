import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';

import { MENU_ROUTES } from './constants/routes/routes';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={MENU_ROUTES.HOME} exact component={Home} />
        <Route path={MENU_ROUTES.ARTICLES} component={Articles} />
      </Switch>
    </Layout>
  );
};

export default App;
