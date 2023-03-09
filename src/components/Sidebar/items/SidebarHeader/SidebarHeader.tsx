import React, { FC, MouseEventHandler } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IApiWallet } from 'api/fragment/WALLET';

import APP_ROUTES from 'core/APP_ROUTES';

import WalletDropdown from 'components/WalletDropdown';

import AddIcon from '@mui/icons-material/Add';
import LogoIcon from 'assets/icons/logo_4.svg';

import './sidebar-header.scss';

type SidebarHeaderProps = {
  wallets: IApiWallet[] | null;
  loading?: boolean;
  currentWallet: IApiWallet | null;
  onWalletChange: (walletId: string) => void;
  isAddButtonTooltipVisible: boolean;
  onAddButtonMouseEnter: MouseEventHandler<HTMLButtonElement>;
  onAddButtonMouseLeave: MouseEventHandler<HTMLButtonElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const SidebarHeader: FC<SidebarHeaderProps> = ({
  wallets,
  loading,
  currentWallet,
  onClick,
  onWalletChange,
  onAddButtonMouseEnter,
  onAddButtonMouseLeave,
  isAddButtonTooltipVisible,
}) => {
  const { t } = useTranslation('sidebar');

  const hasWallets = wallets ? wallets.length > 0 : false;

  const isContentVisible = hasWallets && !!wallets && !!currentWallet;

  return (
    <header className="sidebar-header">
      <div className="header__brand-container">
        <div className="header__logo-wrapper">
          <LogoIcon />
        </div>
        <h1 className="sidebar-header-title">REBALANCER</h1>
      </div>
      {loading && (
        <>
          <Skeleton variant="rounded" width="100%" height="40px" className="sidebar__skeleton" />
          <Skeleton variant="rounded" width="100%" height="40px" className="sidebar__skeleton" />
        </>
      )}
      {isContentVisible && (
        <>
          <WalletDropdown
            wallets={wallets}
            currentWallet={currentWallet}
            onWalletChange={onWalletChange}
          />
          <Tooltip
            title={t('create_new_wallet')}
            classes={{
              tooltip: 'sidebar__tooltip',
            }}
            arrow
            open={isAddButtonTooltipVisible}>
            <Link to={APP_ROUTES.walletCreator.path}>
              <Button
                variant="contained"
                color="secondary"
                className="sidebar__add-wallet"
                onMouseEnter={onAddButtonMouseEnter}
                onMouseLeave={onAddButtonMouseLeave}
                onClick={onClick}>
                <AddIcon className="add-wallet__icon" />
                <p className="add-wallet__text">{t('create_new_wallet')}</p>
              </Button>
            </Link>
          </Tooltip>
        </>
      )}
    </header>
  );
};

export default SidebarHeader;
