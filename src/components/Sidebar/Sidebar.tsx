import React, { FC, useMemo } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import WalletDropdown from 'components/WalletDropdown';
import IRouteParams from 'core/IRouteParams';

import SidebarProps from './Sidebar.types';
import APP_ROUTES from 'core/APP_ROUTES';
import { IApiWallet } from 'api/fragment/WALLET';
import useWalletsService from 'hooks/useWalletsService';

const Sidebar: FC<SidebarProps> = ({ loading }) => {
  const { walletId } = useParams<IRouteParams>();

  const { wallets } = useWalletsService();

  const currentWallet = useMemo<IApiWallet | null>(
    () => wallets?.find((wallet) => wallet._id === walletId) || null,
    [walletId, wallets]
  );

  const hasWallets = wallets?.length || 0;

  return (
    <div>
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
    </div>
  );
};

export default Sidebar;
