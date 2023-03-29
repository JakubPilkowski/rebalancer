import { TOptions } from 'i18next';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export type UseTranslate = { t: UseTranslateHandler };

export type UseTranslateHandler = (key: string, options?: TOptions) => string;

export default function useTranslate(): UseTranslate {
  const { t } = useTranslation();

  const translate = useCallback<UseTranslateHandler>(
    (key, options) => {
      const translation = options ? t(key, options) : t(key);
      return translation || '';
    },
    [t]
  );

  return { t: translate };
}
