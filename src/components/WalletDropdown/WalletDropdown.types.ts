import { IApiWallet } from 'api/fragment/WALLET';

type WalletDropdownProps = {
  className?: string;
  wallets: IApiWallet[];
  currentWallet: IApiWallet;
};

export default WalletDropdownProps;
