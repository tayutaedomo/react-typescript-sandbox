import React from 'react';

import Home from '../components/chakraui/pages/Home';
import Setting from '../components/chakraui/pages/Setting';
import UserManagement from '../components/chakraui/pages/UserManagement';

export const chakuraUIRouters = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/user_management',
    exact: false,
    children: <UserManagement />,
  },
  {
    path: '/setting',
    exact: false,
    children: <Setting />,
  },
];
