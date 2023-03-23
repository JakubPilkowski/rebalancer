import { gql } from '@apollo/client';
import { IApiPeriodUnit } from 'api/fragment/PERIOD';

import WALLET, { IApiWallet } from 'api/fragment/WALLET';

export type CreateWalletPayload = {
  wallet: IApiWallet;
};

export type CreateWalletInput = {
  name: string;
  broker: string;
  currency: string;
  // integer
  periodValue: number;
  periodUnit: IApiPeriodUnit;
  periodDeposit: number;
  notifications: number[];
};

export default gql`
  mutation CreateWallet($input: CreateWalletInput!) {
    wallet(id: $walletId) {
      ...Wallet
    }
  }
  ${WALLET}
`;
