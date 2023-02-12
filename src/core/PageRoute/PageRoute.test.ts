import PageRoute from './PageRoute';

describe('PageRoute', () => {
  it('should create PageRoute instance without ref function', () => {
    const route = new PageRoute({ path: '/test' });

    expect(route.path).toBe('/test');
    expect(route.get()).toBe('/test');
  });

  it('should create PageRoute instance with ref', () => {
    const route = new PageRoute({
      path: '/test/:testId/:childTestId',
      ref: (testId: string, childTestId: string) => {
        return `/test/${testId}/${childTestId}`;
      },
    });
    expect(route.path).toBe('/test/:testId/:childTestId');
    expect(route.get('1', '2')).toBe('/test/1/2');
  });
});
