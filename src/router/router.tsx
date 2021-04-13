import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Practices from '../components/practices/Practices';
import Practice2 from '../components/practice2/Practice2';

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
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
