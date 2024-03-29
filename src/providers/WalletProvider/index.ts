import WalletProvider from './WalletProvider';

import useWalletContext from './useWalletContext';

import WalletProviderProps, {
  WalletActions,
  WalletErrors,
  WalletLoaders,
  WalletProps,
} from './WalletProvider.types';

export default WalletProvider;

export { useWalletContext };

export type { WalletActions, WalletErrors, WalletLoaders, WalletProps, WalletProviderProps };
