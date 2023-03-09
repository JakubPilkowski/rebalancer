import { use, init } from 'i18next';
import { initReactI18next } from 'react-i18next';

import rootPl from 'locales/pl/root.json';
import walletsPl from 'locales/pl/wallets.json';
import sidebarPl from 'locales/pl/sidebar.json';

const resources = {
  pl: {
    root: rootPl,
    wallets: walletsPl,
    sidebar: sidebarPl,
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
