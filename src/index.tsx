import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { useTranslation } from 'react-i18next';

import apolloClient from 'api/apolloClient';

import './i18n';

import theme from 'theme';

import Wallets from 'pages/wallets/Wallets';

import './style.css';

function App() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-orange-500">{t('rebalancer')}</h1>
      <Wallets />
    </>
  );
}

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
