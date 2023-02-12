import { useQuery } from '@apollo/client';
import GET_WALLETS, { GetWalletsPayload } from 'api/queries/GET_WALLETS';
import Error from 'components/Error';
import Loader from 'components/Loader';
import Panel from 'components/Panel';
import Sidebar from 'components/Sidebar';
import PAGE_ROUTES from 'core/PAGE_ROUTES';
import React, { FC, lazy } from 'react';

const Wallet = lazy(async () => import('pages/Wallet'));
const WalletCreator = lazy(async () => import('pages/WalletCreator'));

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

const Dashboard: FC = () => {
  const location = useLocation();

  const { data, loading, error } = useQuery<GetWalletsPayload>(GET_WALLETS);

  //   if (loading) {
  //     return <p>Ładowanie...</p>;
  //   }

  //   if (error) {
  //     return <p>{error.message}</p>;
  //   }

  const walletsLength = data?.wallets.length || 0;

  const hasWallets = walletsLength > 0;

  if (!!data && location.pathname === PAGE_ROUTES.dashboard.path) {
    return (
      <Navigate
        replace
        to={
          hasWallets ? PAGE_ROUTES.wallet.get(data.wallets[0]._id) : PAGE_ROUTES.walletCreator.path
        }
      />
    );
  }

  return (
    <div>
      <Sidebar loading={loading} />
      <Panel>
        <>
          {loading && <Loader />}
          {error && <Error error={error} />}
          {!loading && !error && (
            <Routes>
              <Route path={PAGE_ROUTES.walletCreator.path}>
                <WalletCreator />
              </Route>
              <Route path={PAGE_ROUTES.wallet.path}>
                <Wallet />
              </Route>
            </Routes>
          )}
        </>
      </Panel>
    </div>
  );
};

export default Dashboard;
