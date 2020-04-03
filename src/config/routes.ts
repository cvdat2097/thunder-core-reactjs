import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import { RouteConfig } from '../utils/AppRoute';

export default [
  {
    path: '/user',
    component: Profile,
  },
  {
    path: '/profile',
    component: () => 'Simple',
    exact: true,
    children: [
      {
        path: '/profile/edit',
        component: ProfileEdit,
        exact: true,
      },
      {
        path: '/profile/save',
        component: ProfileEdit,
      },
    ],
  },
] as Array<RouteConfig>;
