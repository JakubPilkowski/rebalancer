import AppRoute from './AppRoute';

describe('AppRoute', () => {
  it('should create AppRoute instance without ref function', () => {
    const route = new AppRoute({ path: '/test' });

    expect(route.path).toBe('/test');
    expect(route.get()).toBe('/test');
  });

  it('should create AppRoute instance with ref', () => {
    const route = new AppRoute({
      path: '/test/:testId/:childTestId',
      ref: (testId: string, childTestId: string) => {
        return `/test/${testId}/${childTestId}`;
      },
    });
    expect(route.path).toBe('/test/:testId/:childTestId');
    expect(route.get('1', '2')).toBe('/test/1/2');
  });
});
