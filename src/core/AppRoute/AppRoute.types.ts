export type AppRouteFunction = (...params: string[]) => string;

export type AppRouteArguments = {
  path: string;
  ref?: AppRouteFunction;
};
