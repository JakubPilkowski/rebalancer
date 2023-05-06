import React, { FC } from 'react';

import { useWalletContext } from 'providers/WalletProvider';

import withWallet from 'HOC/withWallet';

import WalletCreatorRender from '../WalletCreatorRender';

const WalletCreatorContainer: FC<unknown> = () => {
  const { actions, loaders, errors } = useWalletContext();

  return <WalletCreatorRender />;
};

export default withWallet(WalletCreatorContainer);
