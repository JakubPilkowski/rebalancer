import React, { FC } from 'react';
import PanelProps from './Panel.types';

const Panel: FC<PanelProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Panel;
