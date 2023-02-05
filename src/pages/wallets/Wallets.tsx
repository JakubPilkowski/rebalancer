import React, { FC, memo } from 'react';
import { useQuery } from '@apollo/client';

import GET_WALLETS, { GetWalletsPayload } from 'api/queries/GET_WALLETS';

type Props = Record<string, unknown>;

const Wallets: FC<Props> = () => {
  const { data, loading, error } = useQuery<GetWalletsPayload>(GET_WALLETS);

  if (loading) {
    return <p>Ładowanie...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <p>Wallets</p>
      {data?.wallets.map((wallet) => (
        <div key={wallet._id}>
          <p>{wallet.name}</p>
          <span>{wallet.currency}</span>
        </div>
      ))}
    </div>
  );
};

export default memo(Wallets);
