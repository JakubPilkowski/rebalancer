import { useContext } from 'react';
import WalletContext from './WalletContext';
import WalletProviderProps from './WalletProvider.types';

export default function useWalletContext(): WalletProviderProps {
  const walletContext = useContext<WalletProviderProps | null>(WalletContext);

  if (!walletContext) {
    throw new Error(
      `Null WalletContext object. Check whether WalletProvider instance was provided`
    );
  }

  return walletContext;
}
