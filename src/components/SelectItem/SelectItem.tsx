import React, { FC } from 'react';

import MenuItem from '@mui/material/MenuItem';

import { ISelectOption } from 'components/Select';
import ISelectItem from './ISelectItem';

import './select-item.scss';

const SelectItem = <T extends ISelectOption>({
  icon,
  children,
  value,
  ...props
}: ISelectItem<T>): JSX.Element => {
  return (
    <MenuItem value={value.value} {...props}>
      {icon && <div className="select-item__value-icon">{icon}</div>}
      <span className="select-item__value">{children}</span>
    </MenuItem>
  );
};

export default SelectItem;
