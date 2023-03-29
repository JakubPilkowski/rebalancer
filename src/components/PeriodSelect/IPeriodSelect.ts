import { ISelect, ISelectOption } from 'components/Select';

type IPeriodSelectOmitProps = 'className' | 'onChange' | 'value' | 'disabled' | 'name' | 'ref';

export type IPeriodChangeEvent<T = ISelectOption> = { target: { value: T; name: string } };

export type IPeriodChangeEventHandler<T = ISelectOption> = (event: IPeriodChangeEvent<T>) => void;

export default interface IPeriodSelect {
  periodUnit?: ISelectOption;
  periodValue?: ISelectOption;
  periodUnitInputName: string;
  periodValueInputName: string;
  disabled?: boolean;
  onPeriodUnitChange?: IPeriodChangeEventHandler;
  onPeriodValueChange?: IPeriodChangeEventHandler;
  periodUnitSelectProps?: Omit<ISelect<ISelectOption>, IPeriodSelectOmitProps>;
  periodValueSelectProps?: Omit<ISelect<ISelectOption>, IPeriodSelectOmitProps>;
}
