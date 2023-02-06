import '@testing-library/jest-dom';
import { configure } from '@testing-library/dom';

configure({});

type UseTranslation = {
  t: (str: string) => string;
  i18n: {
    changeLanguage: () => Promise<void>;
  };
};

jest.mock(
  'react-i18next',
  (): Record<string, unknown> => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    ...jest.requireActual('react-i18next'),
    useTranslation: (): UseTranslation => {
      return {
        t: (str) => str,
        i18n: {
          changeLanguage: async () => new Promise(() => {}),
        },
      };
    },
  })
);

jest.mock(
  'i18next',
  (): Record<string, unknown> => ({
    ...jest.requireActual('i18next'),
    t: (val: string): string => val,
  })
);
