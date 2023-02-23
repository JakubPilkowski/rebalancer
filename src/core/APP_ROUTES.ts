import AppRoute from './AppRoute';

export type AppRoutes = {
  dashboard: AppRoute;
  login: AppRoute;
  wallet: AppRoute;
  wallets: AppRoute;
  strategy: AppRoute;
  notifications: AppRoute;
  dataSources: AppRoute;
  settings: AppRoute;
  walletCreator: AppRoute;
  walletSettings: AppRoute;
};

export default <AppRoutes>{
  dashboard: new AppRoute({ path: '/' }),
  login: new AppRoute({ path: '/login' }),
  wallets: new AppRoute({ path: '/wallets' }),
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
  dataSources: new AppRoute({
    path: '/wallets/:walletId/data-sources',
    ref: (walletId) => `/wallets/${walletId}/data-sources`,
  }),
  walletSettings: new AppRoute({
    path: '/wallets/:walletId/wallet-settings',
    ref: (walletId) => `/wallets/${walletId}/wallet-settings`,
  }),
  settings: new AppRoute({ path: '/settings' }),
};
