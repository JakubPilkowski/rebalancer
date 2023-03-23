import React, { FC } from 'react';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import useTranslate from 'hooks/useTranslate';

import Header from 'components/Header';

import IWalletCreatorRender from './IWalletCreatorRender';

import './wallet-creator-render.scss';
import currencyList from 'utils/currencyList';
import Select from 'components/Select';
import SelectItem from 'components/SelectItem';

const WalletCreatorRender: FC<IWalletCreatorRender> = () => {
  const t = useTranslate();

  return (
    <main className="wallet-creator-render">
      <Header title={t('walletCreator:wallet_creator')} />
      <div className="wallet-creator-view__content">
        <section>
          <p className="content__title">{t('walletCreator:basic_data')}</p>
          <div className="content__divider" />

          <div>
            <TextField
              label={t('walletCreator:wallet_name')}
              placeholder={t('walletCreator:enter_wallet_name')}
            />
            <Select
              label={t('walletCreator:broker')}
              placeholder={t('walletCreator:select_broker')}>
              <MenuItem value="XTB">Xtb</MenuItem>
            </Select>
            <Select
              label={t('walletCreator:currency')}
              placeholder={t('walletCreator:select_currency')}>
              {currencyList.map(({ name, code }) => (
                <SelectItem key={code} value={code}>
                  {t(name)}
                </SelectItem>
              ))}
            </Select>
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

export default WalletCreatorRender;
