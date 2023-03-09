import APP_ROUTES from 'core/APP_ROUTES';
import React, { FC, MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import WalletIcon from '@mui/icons-material/Wallet';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

import './sidebar-navigation.scss';

type SidebarNavigationProps = {
  walletId: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

const SidebarNavigation: FC<SidebarNavigationProps> = ({ walletId, onClick }) => {
  const { t } = useTranslation('sidebar');
  return (
    <nav className="sidebar-navigation">
      <NavLink
        className="sidebar-navigation__link"
        to={APP_ROUTES.wallet.get(walletId)}
        onClick={onClick}
        end>
        <WalletIcon className="sidebar-navigation__link-icon" />
        <p className="sidebar-navigation__link-text">{t('wallet')}</p>
      </NavLink>
      <NavLink
        className="sidebar-navigation__link"
        to={APP_ROUTES.strategy.get(walletId)}
        onClick={onClick}>
        <CrisisAlertIcon className="sidebar-navigation__link-icon" />
        <p className="sidebar-navigation__link-text">{t('strategy')}</p>
      </NavLink>
      <NavLink
        className="sidebar-navigation__link"
        to={APP_ROUTES.notifications.get(walletId)}
        onClick={onClick}>
        <NotificationsIcon className="sidebar-navigation__link-icon" />
        <p className="sidebar-navigation__link-text">{t('notifications')}</p>
      </NavLink>
      <NavLink
        className="sidebar-navigation__link"
        to={APP_ROUTES.walletSettings.get(walletId)}
        onClick={onClick}>
        <SettingsApplicationsIcon className="sidebar-navigation__link-icon" />
        <p className="sidebar-navigation__link-text">{t('wallet_settings')}</p>
      </NavLink>
      <div className="sidebar-navigation__divider" />
      <NavLink className="sidebar-navigation__link" to={APP_ROUTES.settings.path} onClick={onClick}>
        <SettingsIcon className="sidebar-navigation__link-icon" />
        <p className="sidebar-navigation__link-text">{t('settings')}</p>
      </NavLink>
    </nav>
  );
};

export default SidebarNavigation;
