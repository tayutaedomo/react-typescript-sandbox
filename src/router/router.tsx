import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/home/Home';
import Practices from '../components/practices/Practices';
import Practice2 from '../components/practice2/Practice2';
import DefaultLayout from '../components/layouts/DefaultLayout';
import CustomHook from '../components/custom_hook/CustomHook';
import ChakraUI from '../components/chakraui/ChakraUI';

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
        <Route path="/custom_hook">
          <CustomHook />
        </Route>
        <Route path="/chakraui">
          <ChakraUI />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default router;
