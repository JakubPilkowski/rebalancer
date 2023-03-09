import React, { FC } from 'react';

import Skeleton from '@mui/material/Skeleton';

import './sidebar-skeleton.scss';

const SidebarSkeleton: FC = () => {
  return (
    <div className="sidebar-skeleton">
      <Skeleton variant="rounded" width="100%" height="36px" className="sidebar-skeleton__item" />
      <Skeleton variant="rounded" width="100%" height="36px" className="sidebar-skeleton__item" />
      <Skeleton variant="rounded" width="100%" height="36px" className="sidebar-skeleton__item" />
      <Skeleton variant="rounded" width="100%" height="36px" className="sidebar-skeleton__item" />
      <Skeleton variant="rounded" width="100%" height="2px" className="sidebar-skeleton__item" />
      <Skeleton variant="rounded" width="100%" height="36px" className="sidebar-skeleton__item" />
    </div>
  );
};

export default SidebarSkeleton;
