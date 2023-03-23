import { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import CREATE_WALLET, { CreateWalletInput, CreateWalletPayload } from 'api/mutation/CREATE_WALLET';
import GET_WALLET, { GetWalletPayload, GetWalletVariables } from 'api/queries/GET_WALLET';

import {
  CreateWalletHandler,
  WalletActions,
  WalletErrors,
  WalletLoaders,
} from 'providers/WalletProvider';

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

  const [createWallet, { loading: isCreating, error: createError }] = useMutation<
    CreateWalletPayload,
    CreateWalletInput
  >(CREATE_WALLET);

  const wallet = useMemo(() => (data ? data.wallet : null), [data]);

  const handleWalletCreate = useCallback<CreateWalletHandler>(
    async (input) => {
      return createWallet({ variables: input }).then((res) => res.data?.wallet || null);
    },
    [createWallet]
  );

  const actions = useMemo<WalletActions>(
    () => ({
      onCreate: handleWalletCreate,
    }),
    [handleWalletCreate]
  );

  const loaders = useMemo<WalletLoaders>(() => {
    const isLoading = isFetching || isCreating;
    return {
      isLoading,
      isFetching,
      isCreating,
    };
  }, [isCreating, isFetching]);

  const errors = useMemo<WalletErrors>(
    () => ({
      fetchError: parseGraphqlError(fetchError),
      createError: parseGraphqlError(createError),
    }),
    [createError, fetchError]
  );

  return {
    wallet,
    actions,
    loaders,
    errors,
  };
}
