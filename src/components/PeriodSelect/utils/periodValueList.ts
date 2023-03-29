import createRangeArray from 'utils/createRangeArray/createRangeArray';

import { ISelectOption } from 'components/Select';
import { IPeriodUnit } from 'core/period/IPeriod';

export default function (unitValue?: IPeriodUnit): ISelectOption[] {
  switch (unitValue) {
    case 'MONTH':
    default:
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
