import { gql } from '@apollo/client';
import IApiNode from 'core/IApiNode';

export type IApiWallet = IApiNode<'Wallet'> & {
  name: string;
  currency: string;
};

export default gql`
  fragment Wallet on Wallet {
    _id
    createdAt
    currency
    name
    __typename
  }
`;
