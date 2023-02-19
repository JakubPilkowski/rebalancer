import React, { FC } from 'react';

import WalletViewProps from './WalletView.types';

const WalletView: FC<WalletViewProps> = ({ wallet }) => {
  return <div>Wallet: {wallet.name}</div>;
};

export default WalletView;
