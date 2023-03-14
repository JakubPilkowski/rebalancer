import React, { FC, lazy, Suspense, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

import useWalletsService from 'hooks/useWalletsService';

import APP_ROUTES from 'core/APP_ROUTES';

import Loader from 'components/Loader';
import { useReactiveVar } from '@apollo/client';
import { currentWalletVar } from 'api/variables';

const Dashboard = lazy(async () => import('pages/Dashboard'));

const App: FC = () => {
  const location = useLocation();
  const currentWallet = useReactiveVar(currentWalletVar);

  const {
    wallets,
    loaders: { isFetching },
    errors: { fetchError },
  } = useWalletsService();

  const walletsLength = wallets ? wallets.length : 0;

  const hasWallets = walletsLength > 0;

  useEffect(() => {
    if (!currentWallet && hasWallets && !!wallets) {
      currentWalletVar(wallets[0].id);
    }
  }, [currentWallet, hasWallets, wallets]);

  return (
    // <Suspense fallback={<Loader />}>
    <>
      {!!wallets && location.pathname === APP_ROUTES.dashboard.path && hasWallets && (
        <Navigate replace to={APP_ROUTES.wallet.get(wallets[0].id)} />
      )}
      {!!wallets && location.pathname === APP_ROUTES.dashboard.path && !hasWallets && (
        <Navigate replace to={APP_ROUTES.welcome.path} />
      )}
      <Dashboard loading={isFetching} error={fetchError}>
        <Outlet />
      </Dashboard>
    </>
    // </Suspense>
  );
};

export default App;
