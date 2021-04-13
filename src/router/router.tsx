import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/home/Home';
import Practices from '../components/practices/Practices';
import Practice2 from '../components/practice2/Practice2';
import DefaultLayout from '../components/layouts/DefaultLayout';

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
        <Route path="/practice2">
          <Practice2 />
        </Route>
        <Route path="/practices">
          <Practices />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default router;
