import { useQuery } from '@tanstack/react-query';
import { getSubSubCategories } from '../../services/apiCategories';

export function useGetSubSubCategories(id) {
  const {
    isLoading,
    data: subSubCategories,
    error,
    refetch,
  } = useQuery({
    queryKey: ['subCategories2'],
    queryFn: () => getSubSubCategories(id),
  });

  return { isLoading, subSubCategories, error, refetch };
}
