import React, { forwardRef, ReactElement, ForwardedRef } from 'react';
import MuiSelect from '@mui/material/Select';
import clsx from 'clsx';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ISelect from './ISelect';

import './select.scss';

const Select = forwardRef(function Select<T>(
  { children, className, IconComponent, MenuProps, startIcon, ...props }: ISelect<T>,
  ref: ForwardedRef<HTMLSelectElement>
): ReactElement {
  return (
    <MuiSelect
      className={clsx('select', className)}
      ref={ref}
      IconComponent={IconComponent || ExpandMoreIcon}
      //   renderValue={(val) => (
      //     <>
      //       <div className="select__value-icon">{startIcon}</div>
      //       <span className="select__value">{val}</span>
      //     </>
      //   )}
      MenuProps={{
        PopoverClasses: {
          root: 'select__popover-root',
          paper: 'select__popover-paper',
        },
        ...MenuProps,
      }}
      {...props}>
      {children}
    </MuiSelect>
  );
});

export default Select;