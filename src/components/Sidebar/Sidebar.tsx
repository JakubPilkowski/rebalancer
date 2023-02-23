import React, { FC, MouseEvent, useCallback, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CSSTransition from 'react-transition-group/CSSTransition';

import { IApiWallet } from 'api/fragment/WALLET';

import useWalletsService from 'hooks/useWalletsService';

import IRouteParams from 'core/IRouteParams';
import APP_ROUTES from 'core/APP_ROUTES';

import Loader from 'components/Loader';
import WalletDropdown from 'components/WalletDropdown';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AnchorLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AnchorRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import WalletIcon from '@mui/icons-material/Wallet';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import DatasetIcon from '@mui/icons-material/Dataset';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SidebarProps from './Sidebar.types';

import './sidebar.scss';
import useToggle from 'hooks/useToggle';
import { Button } from '@mui/material';

const Sidebar: FC<SidebarProps> = ({ loading }) => {
  const { walletId } = useParams<IRouteParams>();
  const sidebarRef = useRef<HTMLElement>(null);
  const [isSidebarDrawerOpen, { setTrue: open, setFalse: close, toggle: toggleDrawer }] =
    useToggle(false);
  const [isSidebarCollapsed, { toggle: toggleCollapse }] = useToggle(false);

  const { wallets } = useWalletsService();

  const currentWallet = useMemo<IApiWallet | null>(
    () => wallets?.find((wallet) => wallet._id === walletId) || null,
    [walletId, wallets]
  );

  const withoutPropagation = useCallback(
    (cb: VoidFunction) => (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      cb();
    },
    []
  );

  const hasWallets = wallets?.length || 0;

  return (
    <>
      {/* <ClickAwayListener onClickAway={close}> */}
      {isSidebarDrawerOpen && <div className="sidebar-backdrop" onClick={close} />}
      <CSSTransition
        in={isSidebarCollapsed || isSidebarDrawerOpen}
        classNames="sidebar-animation"
        nodeRef={sidebarRef}
        // unmountOnExit
        timeout={400}>
        <aside ref={sidebarRef} className="sidebar">
          <div className="sidebar__inner">
            <IconButton
              className="sidebar-collapse-icon"
              onClick={withoutPropagation(toggleCollapse)}>
              {isSidebarCollapsed ? (
                <AnchorRightIcon fontSize="large" />
              ) : (
                <AnchorLeftIcon fontSize="large" />
              )}
            </IconButton>
            {loading && <Loader />}
            {hasWallets && !!wallets && !!walletId && !!currentWallet ? (
              <>
                {/* logo + brand name */}
                <header className="sidebar__header">
                  <h1 className="sidebar__header-title">REBALANCER</h1>
                </header>

                {/* navigation */}
                <nav className="sidebar__main-navigation">
                  <WalletDropdown wallets={wallets} currentWallet={currentWallet} />
                  <Link to={APP_ROUTES.walletCreator.path}>
                    <Button variant="contained" color="secondary" onClick={close}>
                      <AddIcon className="add-wallet__icon" />
                      <p className="add-wallet__text">Dodaj portfel</p>
                    </Button>
                  </Link>
                  <NavLink
                    className="sidebar__link"
                    to={APP_ROUTES.wallet.get(walletId)}
                    onClick={close}>
                    <WalletIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Portel</p>
                  </NavLink>
                  <NavLink
                    className="sidebar__link"
                    to={APP_ROUTES.strategy.get(walletId)}
                    onClick={close}>
                    <CrisisAlertIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Strategia</p>
                  </NavLink>
                  <NavLink
                    className="sidebar__link"
                    to={APP_ROUTES.notifications.get(walletId)}
                    onClick={close}>
                    <NotificationsIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Powiadomienia</p>
                  </NavLink>
                  <NavLink
                    className="sidebar__link"
                    to={APP_ROUTES.dataSources.get(walletId)}
                    onClick={close}>
                    <DatasetIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Źródła danych</p>
                  </NavLink>
                  <NavLink
                    className="sidebar__link"
                    to={APP_ROUTES.walletSettings.get(walletId)}
                    onClick={close}>
                    <SettingsApplicationsIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Ustawienia portfela</p>
                  </NavLink>
                  <div className="sidebar__nav-divider" />
                  <NavLink className="sidebar__link" to={APP_ROUTES.settings.path} onClick={close}>
                    <SettingsIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Ustawienia</p>
                  </NavLink>
                </nav>

                <button className="sidebar__logout">
                  <div className="logout-icon__wrapper">
                    <LogoutIcon className="logout-icon" />
                  </div>
                  <p className="logout-text">Wyloguj się</p>
                </button>
              </>
            ) : (
              <div>
                <h1>Tutaj pojawią się Twoje portfele oszczędnościowe</h1>

                <p>
                  Aby dodać swój pierwszy portfel kliknij przycisk poniżej lub przycisk na panelu
                  sterowania po prawej stronie
                </p>
                <IconButton onClick={() => {}}>
                  <AddBoxIcon fontSize="large" />
                </IconButton>
              </div>
            )}
          </div>
        </aside>
      </CSSTransition>
      {/* </ClickAwayListener> */}

      <IconButton className="sidebar-drawer-icon" onClick={withoutPropagation(toggleDrawer)}>
        {isSidebarDrawerOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </IconButton>
    </>
  );
};

export default Sidebar;
