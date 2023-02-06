import cloneDeep from 'lodash.clonedeep';

import { IApiWallet } from 'api/fragment/WALLET';

import { ApiWalletBuilder } from './ApiWalletBuilder';

export class ApiWalletsBuilder {
  private wallets: IApiWallet[];

  constructor() {
    this.wallets = [];
  }

  public with(...wallets: Array<IApiWallet | ApiWalletBuilder>): this {
    const newWallets = [
      ...this.wallets,
      ...wallets.map((wallet) => (wallet instanceof ApiWalletBuilder ? wallet.get() : wallet)),
    ];

    this.wallets = newWallets;

    return this;
  }

  public get(): IApiWallet[] {
    return cloneDeep(this.wallets);
  }
}
