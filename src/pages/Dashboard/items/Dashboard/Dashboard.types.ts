import IApiError from 'core/IApiError';
import { ReactNode } from 'react';

type DashboardProps = {
  loading?: boolean;
  error?: IApiError;
  children?: ReactNode;
};

export default DashboardProps;
