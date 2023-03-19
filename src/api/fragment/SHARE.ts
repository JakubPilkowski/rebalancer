import { gql } from '@apollo/client';
import IApiNode from 'core/IApiNode';

export type IApiShare = IApiNode<'Share'> & {
  ticker: string;
  /** floating value */
  wage: number;
};

export default gql`
  fragment Share on Share {
    id
    ticker
    wage
    createdAt
    updatedAt
  }
`;
