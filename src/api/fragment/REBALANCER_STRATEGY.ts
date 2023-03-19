import { gql } from '@apollo/client';

import IApiNode from 'core/IApiNode';

import DEPOSIT, { IApiDeposit } from './DEPOSIT';
import PERIOD, { IApiPeriod } from './PERIOD';

export type IApiRebalanceStrategy = IApiNode<'RebalancerStrategy'> & {
  period: IApiPeriod;
  periodDeposit: IApiDeposit;
};

export default gql`
  fragment RebalancerStrategy on RebalanceStrategy {
    id
    period {
      ...Period
    }
    periodDeposit {
      ...Deposit
    }
    createdAt
    updatedAt
    __typename
  }
  ${PERIOD}
  ${DEPOSIT}
`;
