import React, { FC } from 'react';
import Button from '@mui/material/Button';

import WalletViewProps from './WalletView.types';

const WalletView: FC<WalletViewProps> = ({ wallet }) => {
  return (
    <div>
      Wallet: {wallet.name}
      <Button color="primary" variant="contained">
        Create first wallet
      </Button>
    </div>
  );
};

export default WalletView;
