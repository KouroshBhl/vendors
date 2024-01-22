import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCategory } from '../../services/apiCategories';
import { toast } from 'react-hot-toast';

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteCategory,
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
