import cloneDeep from 'lodash.clonedeep';

import { IApiWallet } from 'api/fragment/WALLET';

export class ApiWalletBuilder {
  private wallet: IApiWallet;

  constructor() {
    this.wallet = {
      __typename: 'Wallet',
      id: '1',
      createdAt: '2023-01-01T12:00:00.000Z',
      name: '',
      currency: '',
    };
  }

  public with(wallet: Partial<IApiWallet>): this {
    const newwallet = {
      ...this.wallet,
      ...wallet,
    };
    this.wallet = newwallet;
    return this;
  }

  public get(): IApiWallet {
    return cloneDeep(this.wallet);
  }
}
