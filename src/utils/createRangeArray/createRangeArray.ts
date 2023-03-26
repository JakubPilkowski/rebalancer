type CreateRangeArrayArgs<T> = {
  from?: number;
  step?: number;
  cb?: (val: number) => T;
};

export default function createRangeArray<T = number>(
  length: number,
  args: CreateRangeArrayArgs<T>
): T[] {
  const { from, step, cb }: CreateRangeArrayArgs<T> = {
    from: 0,
    step: 1,
    cb: (val) => val as T,
    ...args,
  };

  return Array.from({ length }, (_, i) => cb(i * step + from));
}
