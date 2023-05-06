import React, { ComponentType, ReactElement } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import WalletProvider from 'providers/WalletProvider';

import useWalletService from 'hooks/useWalletService';

import Loader from 'components/Loader';

import APP_ROUTES from 'core/APP_ROUTES';
import IRouteParams from 'core/IRouteParams';

const withWallet = (WrappedComponent: ComponentType<unknown>) => {
  return (props: any): ReactElement => {
    const { walletId } = useParams<IRouteParams>();

    const { wallet, actions, loaders, errors } = useWalletService({ walletId: walletId as string });

    if (loaders.isFetching) {
      return <Loader />;
    }

    // console.log(wallet);

    // if (!wallet) {
    //   <Navigate to={APP_ROUTES.pageNotFound.path} />;
    // }

    return (
      <WalletProvider wallet={wallet} actions={actions} loaders={loaders} errors={errors}>
        <WrappedComponent {...props} />
      </WalletProvider>
    );
  };
};

export default withWallet;
