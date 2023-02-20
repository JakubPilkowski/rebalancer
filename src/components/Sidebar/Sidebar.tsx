import React, { FC, useMemo, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
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

import SidebarProps from './Sidebar.types';

import './sidebar.scss';
import useToggle from 'hooks/useToggle';

const Sidebar: FC<SidebarProps> = ({ loading }) => {
  const { walletId } = useParams<IRouteParams>();
  const [isSidebarDrawerOpen, { setTrue: open, setFalse: close }] = useToggle(false);
  const [isSidebarCollapsed, { toggle: toggleCollapse }] = useToggle(false);

  const { wallets } = useWalletsService();

  const currentWallet = useMemo<IApiWallet | null>(
    () => wallets?.find((wallet) => wallet._id === walletId) || null,
    [walletId, wallets]
  );

  const hasWallets = wallets?.length || 0;

  return (
    <>
      <CSSTransition
        in={isSidebarCollapsed || isSidebarDrawerOpen}
        classNames="sidebar-animation"
        timeout={400}>
        <aside className="sidebar">
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
          <IconButton onClick={toggleCollapse}>
            {isSidebarCollapsed ? <AnchorRightIcon /> : <AnchorLeftIcon />}
          </IconButton>
          {loading && <Loader />}
          {hasWallets && !!wallets && !!walletId && !!currentWallet ? (
            <>
              <WalletDropdown wallets={wallets} currentWallet={currentWallet} />
              {/* navigation */}
              <NavLink to={APP_ROUTES.wallet.get(walletId)}>Portel</NavLink>
            </>
          ) : (
            <>No wallets</>
          )}
        </aside>
      </CSSTransition>
      <IconButton onClick={open}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Sidebar;
