import React, { FC } from 'react';
import WalletContext from './WalletContext';

import WalletProviderProps from './WalletProvider.types';

const WalletProvider: FC<WalletProviderProps> = ({ children, ...props }) => {
  return <WalletContext.Provider value={props}>{children}</WalletContext.Provider>;
};

export default WalletProvider;
