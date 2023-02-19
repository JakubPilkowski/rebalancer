import { IApiWallet } from 'api/fragment/WALLET';
import { WalletActions, WalletErrors, WalletLoaders } from 'providers/WalletProvider';

export type UseWalletServiceOptions = {
  walletId: string;
};

type UseWalletService = {
  actions: WalletActions;
  wallet: IApiWallet | null;
  loaders: WalletLoaders;
  errors: WalletErrors;
};

export default UseWalletService;
