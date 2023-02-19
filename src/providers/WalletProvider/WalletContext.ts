import { createContext } from 'react';

import { WalletProps } from './WalletProvider.types';

export default createContext<WalletProps | null>(null);
