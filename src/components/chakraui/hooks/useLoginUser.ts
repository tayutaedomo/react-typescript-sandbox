import { useContext } from 'react';

import {
  LoginUserContext,
  LoginUserContextType,
} from '../../../providers/ChakraUILoginUserProvider';

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
