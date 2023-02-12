import React, { ComponentType, ReactElement } from 'react';
import { ApolloError } from '@apollo/client';
import Error from 'components/Error';
import IRouteParams from 'core/IRouteParams';
import useWalletService from 'hooks/useWalletService';
import WalletProvider from 'providers/WalletProvider';

import { useParams } from 'react-router-dom';

const withWallet = (WrappedComponent: ComponentType<any>) => {
  return (props: any): ReactElement => {
    const { walletId } = useParams<IRouteParams>();

    const { wallet, actions, loaders, errors } = useWalletService({ walletId: walletId as string });

    if (!wallet) {
      return <Error error={new ApolloError({ errorMessage: 'EmptyWalletObject' })} />;
    }

    return (
      <WalletProvider wallet={wallet} actions={actions} loaders={loaders} errors={errors}>
        <WrappedComponent {...props} />
      </WalletProvider>
    );
  };
};

export default withWallet;
