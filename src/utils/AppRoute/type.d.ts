import { RouteProps } from 'react-router-dom';

export interface RouteConfig extends RouteProps {
  children?: Array<RouteConfig>;
}

export interface AppRouteProps {
  routes: Array<RouteConfig>;
}
