import { useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { IApiWallet } from 'api/fragment/WALLET';
import GET_WALLETS, { GetWalletsPayload } from 'api/queries/GET_WALLETS';

import parseGraphqlError from 'utils/parseGrapqlError';

import UseWalletsService, {
  UseWalletsServiceActions,
  UseWalletsServiceErrors,
  UseWalletsServiceLoaders,
} from './useWalletsService.types';

export default function useWalletService(): UseWalletsService {
  const { data, loading: isFetching, error: fetchError } = useQuery<GetWalletsPayload>(GET_WALLETS);

  const wallets = useMemo<IApiWallet[] | null>(() => (data ? data.wallets : null), [data]);

  const actions = useMemo<UseWalletsServiceActions>(() => ({}), []);

  const loaders = useMemo<UseWalletsServiceLoaders>(() => {
    return {
      isFetching,
    };
  }, [isFetching]);

  const errors = useMemo<UseWalletsServiceErrors>(
    () => ({
      fetchError: parseGraphqlError(fetchError),
    }),
    [fetchError]
  );

  return {
    wallets,
    actions,
    loaders,
    errors,
  };
}
