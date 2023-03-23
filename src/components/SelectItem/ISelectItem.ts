import { ReactElement } from 'react';

import { MenuItemProps } from '@mui/material/MenuItem';

export default interface ISelectItem extends MenuItemProps {
  icon?: ReactElement;
}
