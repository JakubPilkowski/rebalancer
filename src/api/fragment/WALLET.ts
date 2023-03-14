import { gql } from '@apollo/client';
import IApiNode from 'core/IApiNode';

export type IApiWallet = IApiNode<'Wallet'> & {
  name: string;
  currency: string;
};

export default gql`
  fragment Wallet on Wallet {
    id
    createdAt
    updatedAt
    currency
    name
    __typename
  }
`;
