import React, { FC, ReactElement } from 'react';

import './header.scss';

type HeaderProps = {
  title: string | ReactElement;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Header;
