import { useQuery } from '@tanstack/react-query';
import { getRootCategories } from '../../services/apiCategories';

export function useRootCategories() {
  const {
    isLoading,
    data: rootCategories,
    error,
    refetch,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getRootCategories,
  });

  return { isLoading, rootCategories, error, refetch };
}
