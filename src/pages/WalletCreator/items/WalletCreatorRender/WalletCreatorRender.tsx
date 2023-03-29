import React, { FC } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import useTranslate from 'hooks/useTranslate';

import currencyList from 'core/currency/currencyList';
import notificationsList from 'core/notification/notificationsList';

import Header from 'components/Header';
import Select from 'components/Select';
import SelectItem from 'components/SelectItem';
import PeriodSelect from 'components/PeriodSelect';

import IWalletCreatorRender from './IWalletCreatorRender';

import './wallet-creator-render.scss';

const WalletCreatorRender: FC<IWalletCreatorRender> = () => {
  const { t } = useTranslate();

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
              {currencyList.map((option) => (
                <SelectItem key={option.value} value={option} icon={option.sign}>
                  {t(option.name)}
                </SelectItem>
              ))}
            </Select>
          </div>
        </section>
        <section>
          <p className="content__title">{t('walletCreator:wallet_strategy')}</p>
          <div className="content__divider" />
          <div>{t('walletCreator:wallet_strategy_info')}</div>
          <div>
            <div>
              <TextField
                placeholder={t('walletCreator:enter_rebalance_deposit')}
                label={t('walletCreator:rebalance_deposit')}
                helperText={t('walletCreator:rebalance_deposit_info')}
              />
            </div>
            <div>
              <PeriodSelect
                // periodUnit={}
                // periodValue={}
                periodUnitInputName="periodUnit"
                periodValueInputName="periodValue"
              />
            </div>
            <div>
              <FormControlLabel
                // value={}
                control={<Switch />}
                label={t('walletCreator:last_rebalancing_date_check')}
                labelPlacement="start"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label={t('walletCreator:wallet_start_date')} disableFuture />
              </LocalizationProvider>
            </div>
            <div>
              <Select
                multiline
                label={t('walletCreator:rebalance_notifications')}
                placeholder={t('walletCreator:select_rebalance_notifications')}>
                {notificationsList.map((option) => (
                  <SelectItem key={option.value} value={option}>
                    {option.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WalletCreatorRender;
