import { SelectProps } from '@mui/material';
import { ReactElement } from 'react';

export default interface ISelect<T> extends Omit<SelectProps<T>, 'renderValue'> {
  startIcon?: ReactElement;
}
