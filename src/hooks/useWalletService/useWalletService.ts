import { useQuery } from '@apollo/client';
import GET_WALLET, { GetWalletPayload, GetWalletVariables } from 'api/queries/GET_WALLET';
import { WalletActions, WalletErrors, WalletLoaders } from 'providers/WalletProvider';
import { useMemo } from 'react';
import parseGraphqlError from 'utils/parseGrapqlError';
import UseWalletService, { UseWalletServiceOptions } from './useWalletService.types';

export default function useWalletService(options: UseWalletServiceOptions): UseWalletService {
  const { walletId } = options;

  const {
    data,
    loading: isFetching,
    error: fetchError,
  } = useQuery<GetWalletPayload, GetWalletVariables>(GET_WALLET, {
    variables: { walletId },
  });

  const wallet = useMemo(() => (data ? data.wallet : null), [data]);

  const actions = useMemo<WalletActions>(() => ({}), []);

  const loaders = useMemo<WalletLoaders>(() => {
    const isLoading = isFetching;
    return {
      isLoading,
      isFetching,
    };
  }, [isFetching]);

  const errors = useMemo<WalletErrors>(
    () => ({
      fetchError: parseGraphqlError(fetchError),
    }),
    [fetchError]
  );

  return {
    wallet,
    actions,
    loaders,
    errors,
  };
}
