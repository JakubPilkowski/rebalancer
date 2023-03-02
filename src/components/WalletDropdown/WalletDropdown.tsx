import React, { FC, useCallback } from 'react';

import Select, { SelectProps, SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WalletIcon from '@mui/icons-material/Wallet';

import WalletDropdownProps from './WalletDropdown.types';

import './wallet-dropdown.scss';

const WalletDropdown: FC<WalletDropdownProps> = ({ wallets, currentWallet, onWalletChange }) => {
  const handleWalletChange = useCallback(
    (e: SelectChangeEvent) => {
      e.stopPropagation();
      onWalletChange(e.target.value);
    },
    [onWalletChange]
  );

  return (
    <Select
      value={currentWallet._id}
      renderValue={() => (
        <>
          <WalletIcon className="wallet-dropdown__value-icon" />
          <span className="wallet-dropdown__value">{currentWallet.name}</span>
        </>
      )}
      onChange={handleWalletChange}
      className="wallet-dropdown"
      MenuProps={{
        PopoverClasses: {
          root: 'wallet-dropdown__popover-root',
          paper: 'wallet-dropdown__popover-paper',
        },
      }}
      IconComponent={ExpandMoreIcon}>
      {wallets.map((wallet) => (
        <MenuItem key={wallet._id} value={wallet._id}>
          <>
            <WalletIcon className="wallet-dropdown__value-icon" />
            <span className="wallet-dropdown__value">{wallet.name}</span>
          </>
        </MenuItem>
      ))}
    </Select>
  );
};

export default WalletDropdown;
