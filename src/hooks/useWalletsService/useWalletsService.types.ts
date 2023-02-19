import { IApiWallet } from 'api/fragment/WALLET';
import IApiError from 'core/IApiError';

export type UseWalletsServiceActions = {};

export type UseWalletsServiceLoaders = {
  isFetching: boolean;
};

export type UseWalletsServiceErrors = {
  fetchError: IApiError;
};

type UseWalletsService = {
  actions: UseWalletsServiceActions;
  wallets: IApiWallet[] | null;
  loaders: UseWalletsServiceLoaders;
  errors: UseWalletsServiceErrors;
};

export default UseWalletsService;
