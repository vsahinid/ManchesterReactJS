import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/RoutesFolder/Home/index';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path="/"></Route>
      </Switch>
    </Layout>
  );
};

export default Routes;
