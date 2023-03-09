import React, { FC, MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

import LogoutIcon from '@mui/icons-material/Logout';

import './sidebar-footer.scss';

type SidebarFooterProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const SidebarFooter: FC<SidebarFooterProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="sidebar-footer">
      <button className="sidebar-footer__logout" onClick={onClick}>
        <div className="logout-icon__wrapper">
          <LogoutIcon className="logout-icon" />
        </div>
        <p className="logout-text">{t('log_out')}</p>
      </button>
    </div>
  );
};

export default SidebarFooter;
