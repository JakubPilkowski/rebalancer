import { use, init } from 'i18next';
import { initReactI18next } from 'react-i18next';

import rootPl from 'locales/pl/root.json';
import walletsPl from 'locales/pl/wallets.json';

const resources = {
  pl: {
    root: rootPl,
    wallets: walletsPl,
  },
};

use(initReactI18next);

init({
  resources,
  fallbackLng: 'pl',
  lng: 'pl',
  defaultNS: 'root',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
