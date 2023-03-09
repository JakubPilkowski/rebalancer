import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
// import { Provider as StoreProvider } from 'react-redux';

import apolloClient from 'api/apolloClient';

import './i18n';

import router from 'router';
import theme from 'theme';
// import store from 'redux/store';

import './style.scss';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
  <ApolloProvider client={apolloClient}>
    {/* <StoreProvider store={store}> */}
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </ThemeProvider>
    {/* </StoreProvider> */}
  </ApolloProvider>
);
