import AppRoute from './AppRoute';

export type AppRoutes = {
  dashboard: AppRoute;
  login: AppRoute;
  wallet: AppRoute;
  strategy: AppRoute;
  notifications: AppRoute;
  connection: AppRoute;
  settings: AppRoute;
  walletCreator: AppRoute;
  account: AppRoute;
};

export default <AppRoutes>{
  dashboard: new AppRoute({ path: '/' }),
  login: new AppRoute({ path: '/login' }),
  wallet: new AppRoute({ path: '/wallets/:walletId', ref: (walletId) => `/wallets/${walletId}` }),
  walletCreator: new AppRoute({ path: '/wallet-creator' }),
  strategy: new AppRoute({
    path: '/wallets/:walletId/strategy',
    ref: (walletId) => `/wallets/${walletId}/strategy`,
  }),
  notifications: new AppRoute({
    path: '/wallets/:walletId/notifications',
    ref: (walletId) => `/wallets/${walletId}/notifications`,
  }),
  connection: new AppRoute({
    path: '/wallets/:walletId/connection',
    ref: (walletId) => `/wallets/${walletId}/connection`,
  }),
  settings: new AppRoute({
    path: '/wallets/:walletId/settings',
    ref: (walletId) => `/wallets/${walletId}/settings`,
  }),
  account: new AppRoute({ path: '/profile' }),
};
