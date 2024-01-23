import { useQuery } from '@tanstack/react-query';

export function useFetchData(queryKey, queryFunction, id = null) {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: [`${queryKey}`],
    queryFn: () => queryFunction(id),
  });

  return { isLoading, data, error, refetch };
}
