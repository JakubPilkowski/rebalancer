import React, { FC, lazy } from 'react';
import { useQuery } from '@apollo/client';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import GET_WALLETS, { GetWalletsPayload } from 'api/queries/GET_WALLETS';

import APP_ROUTES from 'core/APP_ROUTES';

import Loader from 'components/Loader';
import Panel from 'components/Panel';
import Sidebar from 'components/Sidebar';
import WelcomeView from '../WelcomeView';

import DashboardProps from './Dashboard.types';

import './dashboard.scss';

const Dashboard: FC<DashboardProps> = ({ loading, error, children }) => {
  return (
    <div className="dashboard">
      <Panel>
        <>
          {loading && <Loader />}
          {error && <p>{error}</p>}
          {!loading && !error && (children || <WelcomeView />)}
        </>
      </Panel>
      <Sidebar loading={loading} />
    </div>
  );
};

export default Dashboard;
