import { gql } from '@apollo/client';

import IApiNode from 'core/IApiNode';

import CONNECTION, { IApiConnection } from './CONNECTION';
import NOTIFICATION, { IApiNotification } from './NOTIFICATION';
import REBALANCER_STRATEGY, { IApiRebalanceStrategy } from './REBALANCER_STRATEGY';
import SHARE, { IApiShare } from './SHARE';
import WALLET_SETTINGS, { IApiWalletSettings } from './WALLET_SETTINGS';

export type IApiWalletWageStatus = 'UNSET' | 'READY';

export type IApiWallet = IApiNode<'Wallet'> & {
  name: string;
  currency: string;
  connections: IApiConnection[];
  strategy: IApiRebalanceStrategy;
  wageStatus: IApiWalletWageStatus;
  shares: IApiShare[];
  settings: IApiWalletSettings;
  notifications: IApiNotification[];
};

export default gql`
  fragment Wallet on Wallet {
    id
    createdAt
    updatedAt
    currency
    name
    wageStatus
    strategy {
      ...RebalancerStrategy
    }
    connections {
      ...Connection
    }
    settings {
      ...WalletSettings
    }
    shares {
      ...Share
    }
    notifications {
      ...Notification
    }
    __typename
  }
  ${REBALANCER_STRATEGY}
  ${SHARE}
  ${CONNECTION}
  ${WALLET_SETTINGS}
  ${NOTIFICATION}
`;
