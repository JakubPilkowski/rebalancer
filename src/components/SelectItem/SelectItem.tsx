import React, { FC } from 'react';

import MenuItem from '@mui/material/MenuItem';

import ISelectItem from './ISelectItem';

import './select-item.scss';

const SelectItem: FC<ISelectItem> = ({ icon, children, ...props }) => {
  return (
    <MenuItem {...props}>
      {icon && <div className="select-item__value-icon">{icon}</div>}
      <span className="select-item__value">{children}</span>
    </MenuItem>
  );
};

export default SelectItem;
