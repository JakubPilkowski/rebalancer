import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@mui/material/Button';

import apolloClient from 'api/apolloClient';

import theme from 'theme';

import Wallets from 'pages/wallets/Wallets';

import './style.css';

function App() {
  return (
    <h1 className="text-orange-500">
      <Wallets />
      <Button variant="contained" size="large">
        Sample button
      </Button>
    </h1>
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
