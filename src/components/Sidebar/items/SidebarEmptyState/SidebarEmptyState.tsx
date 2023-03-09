import React, { FC, MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import APP_ROUTES from 'core/APP_ROUTES';

import AddBoxIcon from '@mui/icons-material/AddBox';

import './sidebar-empty-state.scss';

type SidebarEmptyStateProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const SidebarEmptyState: FC<SidebarEmptyStateProps> = ({ onClick }) => {
  const { t } = useTranslation('sidebar');
  return (
    <>
      <h1 className="sidebar-empty-state__title">{t('empty_state_title')}</h1>
      <div className="sidebar-empty-state__outer">
        <div className="sidebar-empty-state__inner">
          <p className="sidebar-empty-state__info">{t('empty_state_info')}</p>
          <Link to={APP_ROUTES.walletCreator.path}>
            <Button
              color="secondary"
              variant="contained"
              className="sidebar-empty-state__button"
              onClick={onClick}>
              <span className="sidebar-empty-state__button-text">Dodaj pierwszy portfel</span>
            </Button>
          </Link>
        </div>
      </div>
      <Tooltip
        title={t('add_first_wallet')}
        classes={{
          tooltip: 'sidebar__tooltip',
        }}
        arrow>
        <Link to={APP_ROUTES.walletCreator.path}>
          <Button
            color="secondary"
            variant="contained"
            className="sidebar-empty-state__collapsed-button"
            onClick={close}>
            <span className="sidebar-empty-state__button-icon hidden lg:block">
              <AddBoxIcon fontSize="large" />
            </span>
          </Button>
        </Link>
      </Tooltip>
    </>
  );
};

export default SidebarEmptyState;
