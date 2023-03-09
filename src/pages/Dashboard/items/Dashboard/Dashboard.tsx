import React, { FC, lazy } from 'react';

import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import Panel from 'components/Panel';
import Sidebar from 'components/Sidebar';

import DashboardProps from './Dashboard.types';

import './dashboard.scss';

const Dashboard: FC<DashboardProps> = ({ loading, error, children }) => {
  return (
    <div className="dashboard">
      <Panel>
        <>
          {loading && <Loader />}
          {error && <p>{error}</p>}
          {!loading && !error && children}
          {/* {!loading && !error && <Outlet />} */}
          {/* {!loading && !error && (<Outlet /> || <WelcomeView />)} */}
        </>
      </Panel>
      <Sidebar loading={loading} />
    </div>
  );
};

export default Dashboard;
