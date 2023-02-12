import React, { FC } from 'react';

import ErrorProps from './Error.types';

const Error: FC<ErrorProps> = ({ error }) => {
  return <div>{error.message}</div>;
};

export default Error;
