import { ReactNode } from 'react';

import { MenuItemProps } from '@mui/material/MenuItem';
import { ISelectOption } from 'components/Select/ISelect';

export default interface ISelectItem<T extends ISelectOption> extends Omit<MenuItemProps, 'value'> {
  icon?: ReactNode;
  value: T;
}
