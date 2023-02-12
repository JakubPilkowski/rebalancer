import { gql } from '@apollo/client';

import WALLET, { IApiWallet } from 'api/fragment/WALLET';

export type GetWalletPayload = {
  wallet: IApiWallet;
};

export type GetWalletVariables = {
  walletId: string;
};

export default gql`
  query GetWallet($walletId: String!) {
    wallet(id: $walletId) {
      ...Wallet
    }
  }
  ${WALLET}
`;
