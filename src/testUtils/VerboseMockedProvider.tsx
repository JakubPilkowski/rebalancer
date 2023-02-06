/* eslint-disable no-console */
import React, { FC } from 'react';
import { ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { MockedProvider, MockLink } from '@apollo/client/testing';

import type { MockedProviderProps, MockedResponse } from '@apollo/client/testing';

interface Props extends MockedProviderProps {
  mocks?: readonly MockedResponse[];
  children?: React.ReactElement;
}

const VerboseMockedProvider: FC<Props> = (props) => {
  const { mocks = [], ...otherProps } = props;

  const mockLink = new MockLink(mocks);
  const errorLoggingLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          '[GraphQL error]:' +
            `Message: ${message},` +
            `Location: ${JSON.stringify(locations)},` +
            `Path: ${JSON.stringify(path)}`
        )
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${JSON.stringify(networkError)}`);
    }
  });
  const link = ApolloLink.from([errorLoggingLink, mockLink]);

  return <MockedProvider {...otherProps} mocks={mocks} link={link} />;
};

export default VerboseMockedProvider;
