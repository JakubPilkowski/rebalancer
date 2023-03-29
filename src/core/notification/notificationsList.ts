import createRangeArray from 'utils/createRangeArray/createRangeArray';
import INotificationOption from './INotificationOption';

export default createRangeArray<INotificationOption>(30, {
  from: 1,
  cb: (val) => {
    const stringified = String(val);
    return { name: stringified, value: stringified };
  },
}).reverse();
