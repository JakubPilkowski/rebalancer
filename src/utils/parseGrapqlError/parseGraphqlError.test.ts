import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';
import parseGraphqlError from './parseGraphqlError';

describe('parseGraphqlError', () => {
  it('should return empty string when GraphqlError is null', () => {
    expect(parseGraphqlError(undefined)).toBe('');
  });

  it("should return error message when Graphql response is equal 'Response not successful: Received status code 400'", () => {
    const apolloError = new ApolloError({
      errorMessage: 'Response not successful: Received status code 400',
    });

    expect(parseGraphqlError(apolloError)).toBe('ResponseError');
  });

  it('should return list of errors when graphQLErrors list is provided', () => {
    const apolloError = new ApolloError({
      graphQLErrors: [new GraphQLError('Smth has broken'), new GraphQLError('Unexpected error')],
    });

    expect(parseGraphqlError(apolloError)).toEqual(['Smth has broken', 'Unexpected error']);
  });

  it('should return UndefinedError in other circumstances', () => {
    const apolloError = new ApolloError({});

    expect(parseGraphqlError(apolloError)).toBe('UndefinedError');
  });
});
