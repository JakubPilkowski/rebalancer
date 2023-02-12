import PageRoute from './PageRoute';

export type PageRoutes = {
  dashboard: PageRoute;
  login: PageRoute;
  wallet: PageRoute;
  strategy: PageRoute;
  notifications: PageRoute;
  connection: PageRoute;
  settings: PageRoute;
  walletCreator: PageRoute;
  account: PageRoute;
};

export default <PageRoutes>{
  dashboard: new PageRoute({ path: '/' }),
  login: new PageRoute({ path: '/login' }),
  wallet: new PageRoute({ path: '/:walletId', ref: (walletId) => `/${walletId}` }),
  walletCreator: new PageRoute({ path: '/wallet-creator' }),
  strategy: new PageRoute({
    path: '/:walletId/strategy',
    ref: (walletId) => `/${walletId}/strategy`,
  }),
  notifications: new PageRoute({
    path: '/:walletId/notifications',
    ref: (walletId) => `/${walletId}/notifications`,
  }),
  connection: new PageRoute({
    path: '/:walletId/connection',
    ref: (walletId) => `/${walletId}/connection`,
  }),
  settings: new PageRoute({
    path: '/:walletId/settings',
    ref: (walletId) => `/${walletId}/settings`,
  }),
  account: new PageRoute({ path: '/profile' }),
};
