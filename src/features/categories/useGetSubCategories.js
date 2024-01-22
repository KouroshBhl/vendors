import { useQuery } from '@tanstack/react-query';
import { getSubCategories } from '../../services/apiCategories';

export function useGetSubCategories(id) {
  const {
    isLoading,
    data: subCategories,
    error,
    refetch,
  } = useQuery({
    queryKey: ['subCategories1'],
    queryFn: () => getSubCategories(id),
  });

  return { isLoading, subCategories, error, refetch };
}
