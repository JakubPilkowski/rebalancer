import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export type UseTranslate = UseTranslateHandler;

export type UseTranslateHandler = (key: string) => string;

export default function useTranslate(): UseTranslate {
  const { t } = useTranslation();

  const translate = useCallback(
    (key: string): string => {
      return t(key) || '';
    },
    [t]
  );

  return translate;
}
