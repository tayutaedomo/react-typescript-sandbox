import React, { memo } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Page404 from '../components/Page404';
import Home from '../components/home/Home';
import Practices from '../components/practices/Practices';
import Practice2 from '../components/practice2/Practice2';
import DefaultLayout from '../components/layouts/DefaultLayout';
import CustomHook from '../components/custom_hook/CustomHook';
import ChakuraUIProvider from '../providers/ChakraUIProvider';
import ChakraUILogin from '../components/chakraui/pages/Login';
import { chakuraUIRouters } from './ChakuraUIRoutes';
import { ChakraProvider } from '@chakra-ui/react';
import ChakraUIProvider from '../providers/ChakraUIProvider';

const Router = memo(() => {
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
                {chakuraUIRouters.map((route) => (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    {route.children}
                  </Route>
                ))}
                <Redirect from="/chakraui/home/*" to="/chakraui/home" />
              </Switch>
            </ChakraUIProvider>
          )}
        />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

export default Router;
