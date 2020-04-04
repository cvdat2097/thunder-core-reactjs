import { lazy } from 'react';
import { RouteConfig } from '../utils/AppRoute';

export default [
  {
    path: '/user',
    component: lazy(() => import('../pages/Profile')),
  },
  {
    path: '/profile',
    component: () => 'Simple',
    exact: true,
    children: [
      {
        path: '/profile/edit',
        component: lazy(() => import('../pages/ProfileEdit')),
        exact: true,
      },
      {
        path: '/profile/save',
        component: lazy(() => import('../pages/ProfileEdit')),
      },
    ],
  },
] as Array<RouteConfig>;
