import React, { FC } from 'react';
import PanelProps from './Panel.types';

import './panel.scss';

const Panel: FC<PanelProps> = ({ children }) => {
  return <div className="panel">{children}</div>;
};

export default Panel;
