export type PageRouteFunction = (...params: string[]) => string;

export type PageRouteArguments = {
  path: string;
  ref?: PageRouteFunction;
};
