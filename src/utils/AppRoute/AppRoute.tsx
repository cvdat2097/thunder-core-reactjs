import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRouteProps } from './type';

const AppRoute = ({ routes }: AppRouteProps) => (
  <Switch>
    {routes.map(({ path, children, component, ...rest }, index) => {
      const uniqueKey = `${path}${index}`;

      if (children && children.length && !component) {
        return <AppRoute key={uniqueKey} routes={children} />;
      }

      return (
        <Route key={uniqueKey} path={path} component={component} {...rest} />
      );
    })}
  </Switch>
);

export default AppRoute;
