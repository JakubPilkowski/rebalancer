import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { createRoot } from 'react-dom/client';

import apolloClient from 'api/apolloClient';

import Wallets from 'pages/wallets/Wallets';

import './style.css';

function App() {
  return (
    <h1 className="text-orange-500">
      <Wallets />
    </h1>
  );
}

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
