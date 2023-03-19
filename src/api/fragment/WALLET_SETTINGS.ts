import { gql } from '@apollo/client';
import IApiNode from 'core/IApiNode';

export type IApiWalletSettings = IApiNode<'WalletSettings'> & {
  hasNotificationsSilenced: boolean;
};

export default gql`
  fragment WalletSettings on WalletSettings {
    id
    hasNotificationsSilenced
    createdAt
    updatedAt
  }
`;
