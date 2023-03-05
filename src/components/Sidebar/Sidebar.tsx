import React, { FC, MouseEvent, useCallback, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import CSSTransition from 'react-transition-group/CSSTransition';

import { IApiWallet } from 'api/fragment/WALLET';

import useToggle from 'hooks/useToggle';
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
import LogoIcon from 'assets/icons/logo_4.svg';

import SidebarProps from './Sidebar.types';

import './sidebar.scss';
import { useReactiveVar } from '@apollo/client';
import { currentWalletVar } from 'api/variables';

const Sidebar: FC<SidebarProps> = ({ loading }) => {
  // const { walletId } = useParams<IRouteParams>();
  const walletId = useReactiveVar(currentWalletVar);
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLElement>(null);
  const [isSidebarDrawerOpen, { setFalse: close, toggle: toggleDrawer }] = useToggle(false);
  const [isSidebarCollapsed, { toggle: toggleCollapse }] = useToggle(false);
  const [
    isAddButtonTooltipOpen,
    { setTrue: openAddButtonTooltip, setFalse: closeAddButtonTooltip },
  ] = useToggle(false);

  const [
    isWalletDropdownTooltipOpen,
    { setTrue: openWalletDropdownTooltip, setFalse: closeWalletDropdownTooltip },
  ] = useToggle(false);

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

  const handleTooltipOpen = useCallback(
    (cb: VoidFunction) => (_: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
      if (isSidebarCollapsed) cb();
    },
    [isSidebarCollapsed]
  );

  const handleWalletChange = useCallback(
    (walletId: string) => {
      navigate(APP_ROUTES.wallet.get(walletId), { replace: false });
      close();
    },
    [close, navigate]
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
            <Tooltip
              title={isSidebarCollapsed ? 'Rozszerz pasek boczny' : 'Zwęź pasek boczny'}
              classes={{
                tooltip: 'sidebar__tooltip',
              }}
              arrow>
              <IconButton
                className="sidebar-collapse-icon"
                onClick={withoutPropagation(toggleCollapse)}>
                {isSidebarCollapsed ? <AnchorRightIcon /> : <AnchorLeftIcon />}
              </IconButton>
            </Tooltip>
            {loading && <Loader />}
            {hasWallets && !!wallets && !!walletId && !!currentWallet ? (
              <>
                {/* logo + brand name */}
                <header className="sidebar__header">
                  <div className="header__brand-container">
                    <div className="header__logo-wrapper">
                      <LogoIcon />
                    </div>
                    <h1 className="sidebar__header-title">REBALANCER</h1>
                  </div>
                  {/* <Tooltip
                    title="Zmień portfel inwestycyjny"
                    classes={{
                      tooltip: 'sidebar__tooltip',
                    }}
                    arrow
                    placement="right"
                    open={isWalletDropdownTooltipOpen}> */}
                  <WalletDropdown
                    wallets={wallets}
                    currentWallet={currentWallet}
                    onWalletChange={handleWalletChange}
                    onMouseEnter={handleTooltipOpen(openWalletDropdownTooltip)}
                    onMouseLeave={closeWalletDropdownTooltip}
                  />
                  {/* </Tooltip> */}
                  <Tooltip
                    title="Utwórz nowy portfel"
                    classes={{
                      tooltip: 'sidebar__tooltip',
                    }}
                    arrow
                    open={isAddButtonTooltipOpen}>
                    <Link to={APP_ROUTES.walletCreator.path}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className="sidebar__add-wallet"
                        onMouseEnter={handleTooltipOpen(openAddButtonTooltip)}
                        onMouseLeave={closeAddButtonTooltip}
                        // onClick={close}
                      >
                        <AddIcon className="add-wallet__icon" />
                        <p className="add-wallet__text">Utwórz nowy portfel</p>
                      </Button>
                    </Link>
                  </Tooltip>
                </header>

                {/* navigation */}
                <nav className="sidebar__main-navigation">
                  <NavLink
                    className="sidebar__link"
                    to={APP_ROUTES.wallet.get(walletId)}
                    // onClick={close}
                    end>
                    <WalletIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Portel</p>
                  </NavLink>
                  <NavLink
                    className="sidebar__link"
                    to={APP_ROUTES.strategy.get(walletId)}
                    // onClick={close}
                  >
                    <CrisisAlertIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Strategia</p>
                  </NavLink>
                  <NavLink
                    className="sidebar__link"
                    to={APP_ROUTES.notifications.get(walletId)}
                    // onClick={close}
                  >
                    <NotificationsIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Powiadomienia</p>
                  </NavLink>
                  {/* <NavLink
                    className="sidebar__link"
                    to={APP_ROUTES.dataSources.get(walletId)}
                    onClick={close}>
                    <DatasetIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Źródła danych</p>
                  </NavLink> */}
                  <NavLink
                    className="sidebar__link"
                    to={APP_ROUTES.walletSettings.get(walletId)}
                    // onClick={close}
                  >
                    <SettingsApplicationsIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Ustawienia portfela</p>
                  </NavLink>
                  <div className="sidebar__nav-divider" />
                  <NavLink className="sidebar__link" to={APP_ROUTES.settings.path} onClick={close}>
                    <SettingsIcon className="sidebar__link-icon" />
                    <p className="sidebar__link-text">Ustawienia</p>
                  </NavLink>
                </nav>

                <div className="sidebar__logout-inner">
                  <button className="sidebar__logout">
                    <div className="logout-icon__wrapper">
                      <LogoutIcon className="logout-icon" />
                    </div>
                    <p className="logout-text">Wyloguj się</p>
                  </button>
                </div>
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
