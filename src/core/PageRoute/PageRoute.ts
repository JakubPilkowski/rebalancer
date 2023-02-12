import { PageRouteArguments, PageRouteFunction } from './PageRoute.types';

export default class PageRoute {
  readonly path: string;

  private ref?: PageRouteFunction;

  constructor({ path, ref }: PageRouteArguments) {
    this.path = path;
    this.ref = ref;
  }

  get = (...param: string[]): string => {
    return this.ref ? this.ref(...param) : this.path;
  };
}
