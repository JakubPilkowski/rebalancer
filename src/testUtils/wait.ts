import { act } from '@testing-library/react';

export const wait = async (): Promise<void> => new Promise((res) => setTimeout(res, 0));

/***
 * asynchronous 'act' with 'wait' function inside
 */
export const waitWithAct = async (): Promise<void> =>
  act(async () => {
    await wait();
  });
