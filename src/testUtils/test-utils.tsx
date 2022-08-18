import React, { FC, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';

type Props = {
  children: ReactNode;
};

const AllTheProviders: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
