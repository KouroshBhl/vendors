import { useFetchData } from '../../hooks/useFetchData';
import { getSubCategories } from '../../services/apiCategories';
import SpinnerMini from '../../ui/SpinnerMini';
import { useEffect, useRef, useState } from 'react';
import { Select, Option } from '../../ui/Selection';
import SelectChildCategory from './SelectChildCategory';

function SelectSubCategory({ rootId, register }) {
  const subCategoryField = useRef();
  const [subId, setSubId] = useState(null);
  const {
    data: subCategories,
    isLoading: isLoadingSub,
    refetch,
  } = useFetchData('subCategories1', getSubCategories, rootId);

  useEffect(
    function () {
      refetch();
      if (!subCategoryField.current) return;
      subCategoryField.current.clearValue();
    },
    [rootId]
  );

  if (isLoadingSub) return <SpinnerMini />;

  return (
    <>
      <Select
        defaultValue={'DEFAULT'}
        {...register('subCategory', {
          onChange: (e) => setSubId(e.target.value),
          valueAsNumber: true,
        })}
      >
        <Option value='DEFAULT' disabled>
          Select Sub-Category
        </Option>
        {subCategories.map((subCat) => (
          <Option key={subCat.id} value={subCat.id}>
            {subCat.englishName}
          </Option>
        ))}
      </Select>

      {subId && (
        <SelectChildCategory
          register={register}
          subId={subId}
          rootId={rootId}
        />
      )}
    </>
  );
}

export default SelectSubCategory;
