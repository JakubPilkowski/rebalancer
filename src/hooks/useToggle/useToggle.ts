import { useState, useCallback } from 'react';

import UseToggle from './useToggle.types';

export default function useToggle(initialValue: boolean): UseToggle {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => setValue(true), []);

  const setFalse = useCallback(() => setValue(false), []);

  const toggle = useCallback(() => setValue((val) => !val), []);

  return [
    value,
    {
      setTrue,
      setFalse,
      toggle,
    },
  ];
}
