import type { UseInfiniteQueryOptions, UseQueryOptions } from '@tanstack/react-query';

export type QueryConfig<T extends (...args: never[]) => unknown> = Omit<
  UseQueryOptions<Awaited<ReturnType<T>>>,
  'queryKey' | 'queryFn'
>;

export type InfiniteQueryConfig<T extends (...args: never[]) => unknown> = Omit<
  UseInfiniteQueryOptions<Awaited<ReturnType<T>>>,
  'queryKey' | 'queryFn' | 'initialPageParam' | 'getNextPageParam'
>;
