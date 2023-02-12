import React, { FC, lazy } from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

const Dashboard = lazy(async () => import('pages/Dashboard'));
const Login = lazy(async () => import('pages/Login'));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/">
        <Dashboard />
      </Route>
    </Routes>
  );
};

export default App;
