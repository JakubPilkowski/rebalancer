import React from 'react';

import { render, screen } from 'testUtils/test-utils';
import VerboseMockedProvider from 'testUtils/VerboseMockedProvider';

import GET_WALLETS_MOCK, { apiWalletsMock } from 'mocks/apiMocks/GET_WALLETS_MOCK';
import { apiWalletMock } from 'mocks/apiMocks/GET_WALLET_MOCK';

import Wallets from '../Wallets';

describe('Wallets', () => {
  const wallet1 = apiWalletMock.with({ name: 'test1', currency: 'USD' });
  const wallet2 = apiWalletMock.with({ name: 'test1', currency: 'PLN' });

  const wallets = apiWalletsMock.with(wallet1, wallet2);

  it('should render Wallets page', async () => {
    render(
      <VerboseMockedProvider mocks={[GET_WALLETS_MOCK({ result: wallets.get() })]}>
        <Wallets />
      </VerboseMockedProvider>
    );

    // await

    expect(screen.getByText('Wallets')).toBeInTheDocument();
  });
});
