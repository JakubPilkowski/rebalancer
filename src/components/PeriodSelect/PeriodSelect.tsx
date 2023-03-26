import React, { FC } from 'react';

import useTranslate from 'hooks/useTranslate';

import Select from 'components/Select';
import SelectItem from 'components/SelectItem';

import IPeriodSelect from './IPeriodSelect';

import './period-select.scss';

const PeriodSelect: FC<IPeriodSelect> = ({ periodUnit, periodValue }) => {
  const { t } = useTranslate();

  return (
    <div className="period-select">
      <Select className="period-select__unit-select">
        {periodUnitList.map((option) => (
          <SelectItem>{option.name}</SelectItem>
        ))}
      </Select>
      <div className="period-select__divider" />
      <Select className="period-select__value-select"></Select>
    </div>
  );
};

export default PeriodSelect;
