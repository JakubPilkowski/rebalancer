import Loader from 'components/Loader';
import APP_ROUTES from 'core/APP_ROUTES';
import withWallet from 'HOC/withWallet';
import { useWalletContext } from 'providers/WalletProvider';
import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import WalletView from '../WalletView';

const WalletContainer: FC = () => {
  const {
    wallet,
    loaders: { isFetching },
  } = useWalletContext();

  return <WalletView wallet={wallet} />;
};

export default withWallet(WalletContainer);
