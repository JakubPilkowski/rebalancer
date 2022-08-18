import React from 'react';
import { render, screen } from 'testUtils/test-utils';
import Wallets from '../Wallets';

describe('Wallets', () => {
  it('should render Wallets page', () => {
    render(<Wallets />);

    expect(screen.getByText('Wallets')).toBeInTheDocument();
  });
});
