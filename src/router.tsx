import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, LoaderFunctionArgs } from 'react-router-dom';

import { currentWalletVar } from 'api/variables';

import APP_ROUTES from 'core/APP_ROUTES';

const Login = lazy(async () => import('pages/Login'));
const Wallet = lazy(async () => import('pages/Wallet'));
const WalletNotifications = lazy(async () => import('pages/WalletNotifications'));
const WalletStrategy = lazy(async () => import('pages/WalletStrategy'));
const WalletSettings = lazy(async () => import('pages/WalletSettings'));
const WalletCreator = lazy(async () => import('pages/WalletCreator'));
const Settings = lazy(async () => import('pages/Settings'));
const Welcome = lazy(async () => import('pages/Welcome'));
const PageNotFound = lazy(async () => import('pages/PageNotFound'));

import Loader from 'components/Loader';

import App from './App';

const walletLoader = ({ params }: LoaderFunctionArgs): string | null => {
  const newValue = currentWalletVar(params.walletId);
  return newValue;
};

export default createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: APP_ROUTES.dashboard.path,
          element: null,
        },
        {
          path: APP_ROUTES.pageNotFound.path,
          element: (
            <Suspense fallback={<Loader />}>
              <PageNotFound />
            </Suspense>
          ),
        },
        {
          path: APP_ROUTES.login.path,
          element: (
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: APP_ROUTES.welcome.path,
          element: (
            <Suspense fallback={<Loader />}>
              <Welcome />
            </Suspense>
          ),
        },
        {
          path: APP_ROUTES.settings.path,
          element: (
            <Suspense fallback={<Loader />}>
              <Settings />
            </Suspense>
          ),
        },
        {
          path: APP_ROUTES.walletCreator.path,
          element: (
            <Suspense fallback={<Loader />}>
              <WalletCreator />
            </Suspense>
          ),
        },
        {
          path: APP_ROUTES.wallet.path,
          loader: walletLoader,
          element: (
            <Suspense fallback={<Loader />}>
              <Wallet />
            </Suspense>
          ),
        },
        {
          path: APP_ROUTES.strategy.path,
          loader: walletLoader,
          element: (
            <Suspense fallback={<Loader />}>
              <WalletStrategy />
            </Suspense>
          ),
        },
        {
          path: APP_ROUTES.notifications.path,
          loader: walletLoader,
          element: (
            <Suspense fallback={<Loader />}>
              <WalletNotifications />
            </Suspense>
          ),
        },
        {
          path: APP_ROUTES.walletSettings.path,
          loader: walletLoader,
          element: (
            <Suspense fallback={<Loader />}>
              <WalletSettings />
            </Suspense>
          ),
        },
      ],
    },
  ],
  { basename: '/' }
);
