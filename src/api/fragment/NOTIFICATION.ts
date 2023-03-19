import { gql } from '@apollo/client';
import IApiNode from 'core/IApiNode';

export type IApiNotification = IApiNode<'Notification'> & {
  daysBeforeNotify: number[];
};

export default gql`
  fragment Notification on Notification {
    id
    daysBeforeNotify
    createdAt
    updatedAt
  }
`;
