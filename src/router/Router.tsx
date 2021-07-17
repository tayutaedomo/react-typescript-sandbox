import React, { memo } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Page404 from '../components/Page404';
import Home from '../components/home/Home';
import Practices from '../components/practices/Practices';
import Practice2 from '../components/practice2/Practice2';
import DefaultLayout from '../components/layout/DefaultLayout';
import CustomHook from '../components/custom_hook/CustomHook';
import ChakraUILogin from '../components/chakraui/pages/Login';
import { chakraUIRouters } from './ChakraUIRoutes';
import ChakraUIPrivateRoute from './ChakraUIPrivateRoute';
import ChakraUIProvider from '../providers/ChakraUIProvider';
import ChakraUIHeaderLayout from '../components/chakraui/templates/HeaderLayout';
import Practice3 from '../components/practice3/Practice3';
import Burden from '../components/burden/Burden';
import AwesomeHooks from '../components/awesome_hooks/AwesomeHooks';
import Graphql from '../components/graphql/Graphql';
import ChakraUISimpleProvider from '../providers/ChakraUISimpleProvider';
import GraphqlHeaderLayout from '../components/graphql/templates/HeaderLayout';

const Router = memo(() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
        <Route path="/practices">
          <Practices />
        </Route>
        <Route path="/practice2">
          <Practice2 />
        </Route>
        <Route path="/custom_hook">
          <CustomHook />
        </Route>
        <Route exact path="/chakraui">
          <ChakraUIProvider>
            <ChakraUILogin />
          </ChakraUIProvider>
        </Route>
        <Route
          path="/chakraui/home"
          render={({ match: { url } }) => (
            <ChakraUIProvider>
              <Switch>
                {chakraUIRouters.map((route) => (
                  <ChakraUIPrivateRoute
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    <ChakraUIHeaderLayout>
                      {route.children}
                    </ChakraUIHeaderLayout>
                  </ChakraUIPrivateRoute>
                ))}
                <Redirect from="/chakraui/home/*" to="/chakraui/home" />
              </Switch>
            </ChakraUIProvider>
          )}
        />
        <Route path="/practice3">
          <DefaultLayout>
            <Practice3 />
          </DefaultLayout>
        </Route>
        <Route path="/burden">
          <DefaultLayout>
            <Burden />
          </DefaultLayout>
        </Route>
        <Route path="/awesome_hooks">
          <DefaultLayout>
            <AwesomeHooks />
          </DefaultLayout>
        </Route>
        <Route path="/graphql">
          <ChakraUISimpleProvider>
            <GraphqlHeaderLayout>
              <Graphql />
            </GraphqlHeaderLayout>
          </ChakraUISimpleProvider>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

export default Router;
