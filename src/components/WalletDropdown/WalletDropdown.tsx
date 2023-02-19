import React, { FC } from 'react';

import WalletDropdownProps from './WalletDropdown.types';

const WalletDropdown: FC<WalletDropdownProps> = ({ wallets, currentWallet }) => {
  return (
    <div>
      Aktywny: {currentWallet.name}
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet._id}>{wallet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WalletDropdown;
