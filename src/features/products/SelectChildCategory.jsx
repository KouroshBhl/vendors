import { useFetchData } from '../../hooks/useFetchData';
import {
  getSubCategories,
  getSubSubCategories,
} from '../../services/apiCategories';
import SpinnerMini from '../../ui/SpinnerMini';
import { useEffect, useRef } from 'react';
import { Select, Option } from '../../ui/Selection';

function SelectChildCategory({ subId, register }) {
  const subCategoryField = useRef();
  const {
    data: subCategories,
    isLoading: isLoadingSub,
    refetch,
  } = useFetchData('subCategories2', getSubSubCategories, subId);

  useEffect(
    function () {
      refetch();
      if (!subCategoryField.current) return;
      subCategoryField.current.clearValue();
    },
    [subId]
  );

  if (isLoadingSub) return <SpinnerMini />;

  return (
    <Select {...register('childCategory')} defaultValue={'DEFAULT'}>
      <Option value='DEFAULT' disabled>
        Select Sub-Category
      </Option>
      {subCategories.map((rootCat) => (
        <Option key={rootCat.id} value={rootCat.id}>
          {rootCat.englishName}
        </Option>
      ))}
    </Select>
  );
}

export default SelectChildCategory;
