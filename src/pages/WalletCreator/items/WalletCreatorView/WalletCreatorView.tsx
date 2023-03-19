import Header from 'components/Header';
import React, { FC } from 'react';

import useTranslate from 'hooks/useTranslate';

import WalletCreatorViewProps from './WalletCreatorView.types';

import './wallet-creator-view.scss';
import { Select, TextField } from '@mui/material';

const WalletCreatorView: FC<WalletCreatorViewProps> = () => {
  const t = useTranslate();
  return (
    <main className="wallet-creator-view">
      <Header title={t('walletCreator:wallet_creator')} />
      <div className="wallet-creator-view__content">
        <section>
          <p className="content__title">{t('walletCreator:basic_data')}</p>
          <div className="content__divider" />

          <div>
            <TextField />
            <Select />
            <Select />
          </div>
        </section>
        <section>
          <p className="content__title">{t('walletCreator:wallet_strategy')}</p>
          <div className="content__divider" />
          <div>
            <div>
              <TextField />
            </div>
            <div>
              <Select />
              <Select />
            </div>
            <div>{/* NotificationPicker */}</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WalletCreatorView;
