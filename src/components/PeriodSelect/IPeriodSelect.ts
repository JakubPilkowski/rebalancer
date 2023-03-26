import { ISelect, ISelectOption } from 'components/Select';

type IPeriodSelectOmitProps = 'className' | 'onChange' | 'value' | 'disabled';

export default interface IPeriodSelect {
  periodUnit: ISelectOption;
  periodValue: ISelectOption;
  disabled?: boolean;
  onUnitChange: ISelect<ISelectOption>['onChange'];
  onPeriodChange: ISelect<ISelectOption>['onChange'];
  unitSelectProps?: Omit<ISelect<ISelectOption>, IPeriodSelectOmitProps>;
  valueSelectProps?: Omit<ISelect<ISelectOption>, IPeriodSelectOmitProps>;
}
