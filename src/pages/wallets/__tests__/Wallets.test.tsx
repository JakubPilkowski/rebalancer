import React from 'react';

import { render, screen, waitWithAct } from 'testUtils';
import VerboseMockedProvider from 'testUtils/VerboseMockedProvider';
import { ApiWalletBuilder } from 'testUtils/builders/ApiWalletBuilder';

import GET_WALLETS_MOCK from 'apiMocks/GET_WALLETS_MOCK';

import Wallets from '../Wallets';
import { ApiWalletsBuilder } from 'testUtils/builders/ApiWalletsBuilder';

describe('Wallets', () => {
  const wallet1 = new ApiWalletBuilder().with({ id: '1', name: 'test1', currency: 'USD' });
  const wallet2 = new ApiWalletBuilder().with({ id: '2', name: 'test2', currency: 'PLN' });

  const wallets = new ApiWalletsBuilder().with(wallet1, wallet2);

  it('should render Wallets page', async () => {
    render(
      <VerboseMockedProvider mocks={[GET_WALLETS_MOCK({ result: wallets.get() })]}>
        <Wallets />
      </VerboseMockedProvider>
    );

    await waitWithAct();
    await waitWithAct();

    expect(screen.getByText('wallets:investment_wallets')).toBeInTheDocument();

    wallets.get().forEach((wallet) => {
      expect(screen.getByText(wallet.name)).toBeInTheDocument();
      expect(screen.getByText(wallet.currency)).toBeInTheDocument();
    });
  });
});
