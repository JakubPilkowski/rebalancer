import { MockedResponse } from '@apollo/client/testing';

import GET_WALLETS, { GetWalletsPayload } from 'api/queries/GET_WALLETS';
import { IApiWallet } from 'api/fragment/WALLET';

import withMockedResponse from 'testUtils/withMockedResponse';
import { ApiWalletsBuilder } from 'testUtils/builders/ApiWalletsBuilder';

export default function GET_WALLETS_MOCK({
  result,
  error,
}: {
  result?: IApiWallet[];
  error?: Error;
}): MockedResponse<GetWalletsPayload> {
  return withMockedResponse<GetWalletsPayload>({
    data: result ? { wallets: result } : null,
    query: GET_WALLETS,
    error,
  });
}
