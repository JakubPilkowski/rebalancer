import { IApiWallet } from 'api/fragment/WALLET';
import IApiError from 'core/IApiError';
import { ReactNode } from 'react';

/**
 * Here implement wallet actions (create, delete, etc.)
 */
export type WalletActions = {};

export type WalletLoaders = {
  isLoading: boolean;
  isFetching: boolean;
};

export type WalletErrors = {
  fetchError: IApiError;
};

export type WalletProps = {
  /** implement parser for wallet */
  wallet: IApiWallet;
  actions: WalletActions;
  loaders: WalletLoaders;
  errors: WalletErrors;
};

type WalletProviderProps = WalletProps & {
  children?: ReactNode;
};

export default WalletProviderProps;
