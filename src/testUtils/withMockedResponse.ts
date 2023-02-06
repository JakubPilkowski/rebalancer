import { MockedResponse } from '@apollo/client/testing';
import { DocumentNode } from 'graphql';

export default function withMockedResponse<
  D,
  V extends Record<string, unknown> = Record<string, unknown>
>({
  data,
  query,
  variables,
  error,
}: {
  data?: D | null;
  query: DocumentNode;
  variables?: V;
  error?: Error;
}): MockedResponse<D> {
  return {
    request: {
      query,
      variables,
    },
    result: data
      ? {
          data,
        }
      : undefined,
    error,
  };
}
