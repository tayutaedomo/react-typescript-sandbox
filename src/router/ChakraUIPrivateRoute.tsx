import React, { ReactNode, VFC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

import { useLoginUser } from '../components/chakraui/hooks/useLoginUser';

type Props = RouteProps & { children: ReactNode };

const ChakraUIPrivateRoute: VFC<Props> = (props) => {
  const { loginUser } = useLoginUser();

  return loginUser ? <Route {...props} /> : <Redirect to="/chakraui" />;
};

export default ChakraUIPrivateRoute;
