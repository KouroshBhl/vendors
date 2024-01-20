import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBrand } from '../../services/apiBrands';
import { toast } from 'react-hot-toast';

export function useDeleteBrand() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteBrand,
    onSuccess: () => {
      queryClient.invalidateQueries(['brands']);
      toast.success('Brand deleted succesfully');
    },
    onError: () => {
      toast.error('Brand could not delete!');
    },
  });

  return { isLoading, mutate };
}
