import { useQuery } from '@tanstack/react-query';
import { getBrands } from '../../services/apiBrands';

export function useBrands() {
  const {
    isLoading,
    data: brands,
    error,
    refetch,
  } = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });

  return { isLoading, brands, error, refetch };
}
