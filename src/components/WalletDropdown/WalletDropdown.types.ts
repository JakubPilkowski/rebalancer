import { IApiWallet } from 'api/fragment/WALLET';

type WalletDropdownProps = {
  className?: string;
  wallets: IApiWallet[];
  currentWallet: IApiWallet;
  onWalletChange: (walletId: string) => void;
};

export default WalletDropdownProps;
