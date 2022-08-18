import React, { FC, memo } from 'react';

type Props = Record<string, unknown>;

const Wallets: FC<Props> = () => {
  return (
    <div>
      <p>Wallets</p>
    </div>
  );
};

export default memo(Wallets);
