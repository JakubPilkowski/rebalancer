import { gql } from '@apollo/client';
import IApiNode from 'core/IApiNode';

export type IApiConnectionBroker = 'XTB';

export type IApiConnection = IApiNode<'Connection'> & {
  broker: IApiConnectionBroker;
};

export default gql`
  fragment Connection on Connection {
    id
    broker
    createdAt
    updatedAt
  }
`;
