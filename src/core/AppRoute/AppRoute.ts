import { AppRouteArguments, AppRouteFunction } from './AppRoute.types';

export default class AppRoute {
  readonly path: string;

  private ref?: AppRouteFunction;

  constructor({ path, ref }: AppRouteArguments) {
    this.path = path;
    this.ref = ref;
  }

  get = (...param: string[]): string => {
    return this.ref ? this.ref(...param) : this.path;
  };
}
