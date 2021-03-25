import React, {
  Suspense,
  Fragment,
  lazy
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import DashboardLayout from 'src/layouts';
import LoadingScreen from 'src/components/LoadingScreen';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout>
                {route.routes
                  ? renderRoutes(route.routes)
                  : <Component {...props} />}
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes: Routes = [
  {
    path: '/',
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/settings',
        component: lazy(() => import('src/pages/settings'))
      },
      {
        exact: true,
        path: '/convert',
        component: lazy(() => import('src/pages/convert'))
      },
    ]
  }
];

export default routes;
