import React, { FC, useCallback } from 'react';

import Select, { SelectProps, SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      renderValue={() => `${currentWallet.name}`}
      onChange={handleWalletChange}
      className="wallet-dropdown"
      IconComponent={ExpandMoreIcon}>
      {wallets.map((wallet) => (
        <MenuItem key={wallet._id} value={wallet._id}>
          {wallet.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default WalletDropdown;
