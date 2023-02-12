import { ApolloError } from '@apollo/client';

export default function parseGraphqlError(error?: ApolloError): string | string[] {
  if (!error) return '';

  if (error.message === 'Response not successful: Received status code 400') {
    return 'ResponseError';
  }

  if (error.graphQLErrors.length > 0) {
    return error.graphQLErrors.map((err) => err.message);
  }

  return 'UndefinedError';
}
