import APP_ROUTES from 'core/APP_ROUTES';
import useWalletsService from 'hooks/useWalletsService';
import React, { FC, lazy } from 'react';
import { Navigate, Route, useLocation } from 'react-router';
import { Routes } from 'react-router-dom';

const Dashboard = lazy(async () => import('pages/Dashboard'));
const Login = lazy(async () => import('pages/Login'));
const Wallet = lazy(async () => import('pages/Wallet'));
const WalletCreator = lazy(async () => import('pages/WalletCreator'));

const App: FC = () => {
  const location = useLocation();

  const {
    wallets,
    loaders: { isFetching },
    errors: { fetchError },
  } = useWalletsService();

  const walletsLength = wallets ? wallets.length : 0;

  const hasWallets = walletsLength > 0;

  if (hasWallets && !!wallets && location.pathname === APP_ROUTES.dashboard.path) {
    console.log('replace');
    return <Navigate replace to={APP_ROUTES.wallet.get(wallets[0]._id)} />;
  }

  return (
    <Routes>
      <Route path={APP_ROUTES.login.path} element={<Login />} />
      <Route
        path={APP_ROUTES.dashboard.path}
        element={<Dashboard loading={isFetching} error={fetchError} />}
      />
      <Route
        path={APP_ROUTES.wallet.path}
        element={
          <Dashboard loading={isFetching} error={fetchError}>
            <Wallet />
          </Dashboard>
        }
      />
      <Route
        path={APP_ROUTES.walletCreator.path}
        element={
          <Dashboard loading={isFetching} error={fetchError}>
            <WalletCreator />
          </Dashboard>
        }
      />
    </Routes>
  );
};

export default App;
