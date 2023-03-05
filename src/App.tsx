import { currentWalletVar } from 'api/variables';
import Loader from 'components/Loader';
import APP_ROUTES from 'core/APP_ROUTES';
import useWalletsService from 'hooks/useWalletsService';
import React, { FC, lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, useLocation } from 'react-router';
import { Routes, redirect } from 'react-router-dom';

const Dashboard = lazy(async () => import('pages/Dashboard'));
const Login = lazy(async () => import('pages/Login'));
const Wallet = lazy(async () => import('pages/Wallet'));
const WalletNotifications = lazy(async () => import('pages/WalletNotifications'));
const WalletStrategy = lazy(async () => import('pages/WalletStrategy'));
const WalletSettings = lazy(async () => import('pages/WalletSettings'));
const WalletCreator = lazy(async () => import('pages/WalletCreator'));
const Settings = lazy(async () => import('pages/Settings'));
const Wallets = lazy(async () => import('pages/wallets'));
const Welcome = lazy(async () => import('pages/Welcome'));

const App: FC = () => {
  const location = useLocation();

  const {
    wallets,
    actions: { fetch },
    loaders: { isFetching },
    errors: { fetchError },
  } = useWalletsService();

  const walletsLength = wallets ? wallets.length : 0;

  const hasWallets = walletsLength > 0;

  // useEffect(() => {
  //   if (isFetching || fetchError) return;
  //   if (!!wallets && location.pathname === APP_ROUTES.dashboard.path) {
  //     if (!hasWallets) {
  //       redirect(APP_ROUTES.welcome.path);
  //       return;
  //     }
  //     console.log('redirect');
  //     redirect(APP_ROUTES.wallet.get(wallets[0]._id));
  //   }
  // }, [fetchError, hasWallets, isFetching, location.pathname, wallets]);

  return (
    <>
      {!!wallets && location.pathname === APP_ROUTES.dashboard.path && hasWallets && (
        <Navigate replace to={APP_ROUTES.wallet.get(wallets[0]._id)} />
      )}
      {!!wallets && location.pathname === APP_ROUTES.dashboard.path && !hasWallets && (
        <Navigate replace to={APP_ROUTES.welcome.path} />
      )}
      <Routes>
        <Route
          path={APP_ROUTES.login.path}
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route element={<Dashboard loading={isFetching} error={fetchError} />}>
          <Route
            // loader={async () => {
            //   // const result = await fetch();
            //   // const wallets = result.data?.wallets || null;
            //   // if (!wallets) redirect(APP_ROUTES.welcome.path);
            //   // const walletsLength = wallets ? wallets.length : 0;
            //   // const hasWallets = walletsLength > 0;
            //   console.log('loader');
            //   if (!!wallets && location.pathname === APP_ROUTES.dashboard.path) {
            //     if (!hasWallets) {
            //       return redirect(APP_ROUTES.welcome.path);
            //     }
            //     return redirect(APP_ROUTES.wallet.get(wallets[0]._id));
            //   }
            // }}
            path={APP_ROUTES.dashboard.path}
            loader={() => {
              console.log('loader');
            }}
            element={
              null
              // <Navigate
              //   replace
              //   to={
              //     !!wallets && hasWallets
              //       ? APP_ROUTES.wallet.get(wallets[0]._id)
              //       : APP_ROUTES.welcome.path
              //   }
              // />
            }
          />
          <Route
            path={APP_ROUTES.welcome.path}
            element={
              <Suspense fallback={<Loader />}>
                <Welcome />
              </Suspense>
            }
          />
          <Route
            path={APP_ROUTES.settings.path}
            element={
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            }
          />

          <Route
            path={APP_ROUTES.walletCreator.path}
            element={
              <Suspense fallback={<Loader />}>
                <WalletCreator />
              </Suspense>
            }
          />
          <Route
            path={APP_ROUTES.wallet.path}
            action={async ({ params }) => {
              console.log('wallet action');
              currentWalletVar(params.walletId);
            }}
            element={
              <Suspense fallback={<Loader />}>
                <Wallet />
              </Suspense>
            }
          />

          <Route
            path={APP_ROUTES.strategy.path}
            action={async ({ params }) => {
              currentWalletVar(params.walletId);
            }}
            element={
              <Suspense fallback={<Loader />}>
                <WalletStrategy />
              </Suspense>
            }
          />
          <Route
            path={APP_ROUTES.notifications.path}
            action={async ({ params }) => {
              currentWalletVar(params.walletId);
            }}
            element={
              <Suspense fallback={<Loader />}>
                <WalletNotifications />
              </Suspense>
            }
          />
          <Route
            path={APP_ROUTES.walletSettings.path}
            action={async ({ params }) => {
              currentWalletVar(params.walletId);
            }}
            element={
              <Suspense fallback={<Loader />}>
                <WalletSettings />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
