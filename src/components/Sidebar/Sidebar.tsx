import React, { FC, MouseEvent, useCallback, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CSSTransition from 'react-transition-group/CSSTransition';
import { useReactiveVar } from '@apollo/client';

import { IApiWallet } from 'api/fragment/WALLET';
import { currentWalletVar } from 'api/variables';

import useToggle from 'hooks/useToggle';
import useWalletsService from 'hooks/useWalletsService';

import APP_ROUTES from 'core/APP_ROUTES';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AnchorLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AnchorRightIcon from '@mui/icons-material/KeyboardArrowRight';

import SidebarEmptyState from './items/SidebarEmptyState';
import SidebarFooter from './items/SidebarFooter';
import SidebarNavigation from './items/SidebarNavigation';
import SidebarSkeleton from './items/SidebarSkeleton';
import SidebarHeader from './items/SidebarHeader';

import SidebarProps from './Sidebar.types';

import './sidebar.scss';

const Sidebar: FC<SidebarProps> = ({ loading }) => {
  const walletId = useReactiveVar(currentWalletVar);
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLElement>(null);
  const [isSidebarDrawerOpen, { setFalse: close, toggle: toggleDrawer }] = useToggle(false);
  const [isSidebarCollapsed, { toggle: toggleCollapse }] = useToggle(false);
  const [
    isAddButtonTooltipOpen,
    { setTrue: openAddButtonTooltip, setFalse: closeAddButtonTooltip },
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

  const hasWallets = wallets ? wallets.length > 0 : false;

  const isContentVisible = hasWallets && !!wallets && !!walletId && !!currentWallet;

  return (
    <>
      {isSidebarDrawerOpen && <div className="sidebar-backdrop" onClick={close} />}
      <CSSTransition
        in={isSidebarCollapsed || isSidebarDrawerOpen}
        classNames="sidebar-animation"
        nodeRef={sidebarRef}
        timeout={400}>
        <aside ref={sidebarRef} className="sidebar">
          <div className="sidebar__inner">
            {!loading && (
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
            )}
            <SidebarHeader
              currentWallet={currentWallet}
              isAddButtonTooltipVisible={isAddButtonTooltipOpen}
              loading={loading}
              onAddButtonMouseEnter={handleTooltipOpen(openAddButtonTooltip)}
              onAddButtonMouseLeave={closeAddButtonTooltip}
              onClick={close}
              onWalletChange={handleWalletChange}
              wallets={wallets}
            />
            {loading && (
              <div>
                <SidebarSkeleton />
              </div>
            )}
            {!isContentVisible && !loading && (
              <div>
                <SidebarEmptyState onClick={close} />
              </div>
            )}
            {isContentVisible && <SidebarNavigation walletId={walletId} onClick={close} />}

            <SidebarFooter onClick={close} />
          </div>
        </aside>
      </CSSTransition>

      <IconButton className="sidebar-drawer-icon" onClick={withoutPropagation(toggleDrawer)}>
        {isSidebarDrawerOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </IconButton>
    </>
  );
};

export default Sidebar;
