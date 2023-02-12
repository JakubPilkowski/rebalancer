import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import WalletDropdown from 'components/WalletDropdown';
import IRouteParams from 'core/IRouteParams';

import SidebarProps from './Sidebar.types';

const Sidebar: FC<SidebarProps> = ({ hasWallets, loading }) => {
  const { walletId } = useParams<IRouteParams>();
  return (
    <div>
      {loading && <Loader />}
      {hasWallets && !!walletId ? (
        <>
          <WalletDropdown walletId={walletId} />
          {/* navigation */}
        </>
      ) : (
        <>No wallets</>
      )}
    </div>
  );
};

export default Sidebar;
