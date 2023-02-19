import { MockedResponse } from '@apollo/client/testing';

import { IApiWallet } from 'api/fragment/WALLET';
import GET_WALLET, { GetWalletPayload } from 'api/queries/GET_WALLET';

import withMockedResponse from 'testUtils/withMockedResponse';

export default function GET_WALLETS_MOCK({
  result,
  error,
}: {
  result?: IApiWallet;
  error?: Error;
}): MockedResponse<GetWalletPayload> {
  return withMockedResponse<GetWalletPayload>({
    data: result ? { wallet: result } : null,
    query: GET_WALLET,
    error,
  });
}
