import { gql } from '@apollo/client';
import WALLET, { IApiWallet } from 'api/fragment/WALLET';

export type GetWalletsPayload = {
  wallets: IApiWallet[];
};

export default gql`
  query GetWallets {
    wallets {
      ...Wallet
    }
  }
  ${WALLET}
`;
