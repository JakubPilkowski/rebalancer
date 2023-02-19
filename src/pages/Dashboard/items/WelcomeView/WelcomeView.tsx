import APP_ROUTES from 'core/APP_ROUTES';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const WelcomeView: FC = () => {
  return (
    <div>
      Welcome to Rebalance app. To start work you need to create your first wallet clicking button
      bellow
      <Link to={APP_ROUTES.walletCreator.get()}>Create first wallet</Link>
    </div>
  );
};

export default WelcomeView;
