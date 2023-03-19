import { gql } from '@apollo/client';
import IApiNode from 'core/IApiNode';

export type IApiDeposit = IApiNode<'Deposit'> & {
  value: number;
  currency: string;
};

export default gql`
  fragment Deposit on Deposit {
    id
    value
    currency
    createdAt
    updatedAt
    __typename
  }
`;
