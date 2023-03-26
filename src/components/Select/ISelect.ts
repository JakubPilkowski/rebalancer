import { SelectProps } from '@mui/material';
import { ReactElement } from 'react';

export interface ISelectOption {
  /** property to display as option */
  name: string;
  /** value to save */
  value: string;
}

export default interface ISelect<T extends ISelectOption>
  extends Omit<SelectProps<ISelectOption>, 'renderValue'> {
  startIcon?: ReactElement;
}
