import { ISelectOption } from 'components/Select';
import { IApiPeriodUnit } from 'api/fragment/PERIOD';
import createRangeArray from 'utils/createRangeArray/createRangeArray';

export default function (unitValue: IApiPeriodUnit): ISelectOption[] {
  switch (unitValue) {
    case 'MONTH':
      return createRangeArray<ISelectOption>(12, {
        from: 1,
        cb: (val) => ({ name: `${val}`, value: val.toString() }),
      });
    case 'YEAR':
      return createRangeArray<ISelectOption>(2, {
        from: 1,
        cb: (val) => ({ name: `${val}`, value: val.toString() }),
      });
  }
}
