import { gql } from '@apollo/client';
import IApiNode from 'core/IApiNode';

export type IApiPeriodUnit = 'MONTH' | 'YEAR';

export type IApiPeriod = IApiNode<'Period'> & {
  unit: IApiPeriodUnit;
  value: number;
};

export default gql`
  fragment Period on Period {
    id
    unit
    value
    __typename
  }
`;
