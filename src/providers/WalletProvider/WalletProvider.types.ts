import { IApiWallet } from 'api/fragment/WALLET';
import { CreateWalletInput } from 'api/mutation/CREATE_WALLET';
import IApiError from 'core/IApiError';
import { ReactNode } from 'react';

export type CreateWalletHandler = (args: CreateWalletInput) => Promise<IApiWallet | null>;
/**
 * Here implement wallet actions (create, delete, etc.)
 */
export type WalletActions = {
  onCreate: CreateWalletHandler;
};

export type WalletLoaders = {
  isLoading: boolean;
  isFetching: boolean;
  isCreating: boolean;
};

export type WalletErrors = {
  fetchError: IApiError;
  createError: IApiError;
};

export type WalletProps = {
  /** implement parser for wallet */
  wallet: IApiWallet | null;
  actions: WalletActions;
  loaders: WalletLoaders;
  errors: WalletErrors;
};

type WalletProviderProps = WalletProps & {
  children?: ReactNode;
};

export default WalletProviderProps;
