import { FetchResult, LazyQueryExecFunction } from '@apollo/client';
import { IApiWallet } from 'api/fragment/WALLET';
import { GetWalletsPayload } from 'api/queries/GET_WALLETS';
import IApiError from 'core/IApiError';

export type UseWalletsServiceActions = {
  fetch: LazyQueryExecFunction<GetWalletsPayload, Record<string, unknown>>;
};

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
