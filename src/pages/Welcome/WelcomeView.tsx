import APP_ROUTES from 'core/APP_ROUTES';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const WelcomeView: FC = () => {
  return (
    <div>
      Welcome to Rebalance app. To start work you need to create your first wallet clicking button
      bellow
      <Link to={APP_ROUTES.walletCreator.get()}>
        <Button>Create first wallet</Button>
      </Link>
    </div>
  );
};

export default WelcomeView;
