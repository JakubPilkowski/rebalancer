import useWindowSize from 'hooks/useWindowSize';

import { DESKTOP_WIDTH } from 'CONSTANTS';

import UseRwd from './useRwd.types';

export default function useRwd(): UseRwd {
  const { width } = useWindowSize();

  if (!(typeof width === 'number')) {
    return null;
  }

  return width > DESKTOP_WIDTH ? 'desktop' : 'mobile';
}
