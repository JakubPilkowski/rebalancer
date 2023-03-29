import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { SelectProps } from '@mui/material/Select';

import useTranslate from 'hooks/useTranslate';

import { IPeriodUnit } from 'core/period/IPeriod';

import Select, { ISelectOption } from 'components/Select';
import SelectItem from 'components/SelectItem';

import periodUnitList from './utils/periodUnitList';
import periodValueList from './utils/periodValueList';

import IPeriodSelect, { IPeriodChangeEvent } from './IPeriodSelect';

import './period-select.scss';

const defaultFunction = Object.freeze(() => {});

const PeriodSelect: FC<IPeriodSelect> = ({
  periodUnit,
  periodValue,
  onPeriodUnitChange = defaultFunction,
  onPeriodValueChange = defaultFunction,
  periodUnitInputName,
  periodValueInputName,
  disabled,
  periodUnitSelectProps,
  periodValueSelectProps,
}) => {
  const { t } = useTranslate();

  const valuesList = useMemo(
    () => periodValueList(periodUnit?.value as IPeriodUnit),
    [periodUnit?.value]
  );

  const handleSelectChange = useCallback<Required<SelectProps<ISelectOption>>['onChange']>(
    (event) => {
      const name = event.target.name;
      if (name === periodUnitInputName) {
        onPeriodUnitChange(event as IPeriodChangeEvent);
      } else {
        onPeriodValueChange(event as IPeriodChangeEvent);
      }
    },
    [onPeriodUnitChange, onPeriodValueChange, periodUnitInputName]
  );

  useEffect(() => {
    if (!periodUnit || !periodValue) return;
    if (periodUnit.value === 'MONTH') return;
    if (parseInt(periodValue.value) <= 6) return;
    onPeriodValueChange({
      target: { name: periodUnitInputName, value: valuesList[valuesList.length - 1] },
    });
  }, [onPeriodValueChange, periodUnit, periodUnitInputName, periodValue, valuesList]);

  return (
    <div className="period-select">
      <Select
        className="period-select__input period-select__value-select"
        value={periodValue}
        name={periodValueInputName}
        onChange={handleSelectChange}
        disabled={disabled}
        {...periodUnitSelectProps}>
        {valuesList.map((option) => (
          <SelectItem key={option.value} value={option}>
            {option.name}
          </SelectItem>
        ))}
      </Select>
      <div className="period-select__divider" />
      <Select
        className="period-select__input period-select__unit-select"
        name={periodUnitInputName}
        value={periodUnit}
        disabled={disabled}
        onChange={handleSelectChange}
        {...periodValueSelectProps}>
        {periodUnitList.map((option) => (
          <SelectItem key={option.value} value={option}>
            {t(`${option.name}`, { count: parseInt(periodValue?.value || '1') })}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default PeriodSelect;
