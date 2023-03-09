import { SelectProps } from '@mui/material/Select';
import { IApiWallet } from 'api/fragment/WALLET';
import { HTMLAttributes, MouseEventHandler } from 'react';

type WalletDropdownProps = {
  className?: string;
  wallets: IApiWallet[];
  currentWallet: IApiWallet;
  onWalletChange: (walletId: string) => void;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
};

export default WalletDropdownProps;
