import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRouteProps } from './type';

const AppRoute = ({ routes }: AppRouteProps) => (
  <Switch>
    {routes.map(({ path, children, component, ...rest }) => {
      if (children && children.length && !component) {
        return <AppRoute routes={children} />;
      }

      return <Route path={path} component={component} {...rest} />;
    })}
  </Switch>
);

export default AppRoute;
