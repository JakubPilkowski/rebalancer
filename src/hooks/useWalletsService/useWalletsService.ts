import { useEffect, useMemo } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';

import { IApiWallet } from 'api/fragment/WALLET';
import GET_WALLETS, { GetWalletsPayload } from 'api/queries/GET_WALLETS';

import parseGraphqlError from 'utils/parseGrapqlError';

import UseWalletsService, {
  UseWalletsServiceActions,
  UseWalletsServiceErrors,
  UseWalletsServiceLoaders,
} from './useWalletsService.types';

export default function useWalletService(automatic = true): UseWalletsService {
  const [fetch, { data, loading: isFetching, error: fetchError }] =
    useLazyQuery<GetWalletsPayload>(GET_WALLETS);

  const wallets = useMemo<IApiWallet[] | null>(() => (data ? data.wallets : null), [data]);

  const actions = useMemo<UseWalletsServiceActions>(() => ({ fetch }), [fetch]);

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

  useEffect(() => {
    if (!automatic) return;
    fetch();
  }, [automatic, fetch]);

  return {
    wallets: [],
    actions,
    loaders,
    errors,
  };
}
