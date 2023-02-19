import withWallet from 'HOC/withWallet';
import { useWalletContext } from 'providers/WalletProvider';
import React, { FC } from 'react';
import WalletView from '../WalletView';

const WalletContainer: FC = () => {
  const { wallet } = useWalletContext();

  return <WalletView wallet={wallet} />;
};

export default withWallet(WalletContainer);
