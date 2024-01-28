import { useFetchData } from '../../hooks/useFetchData';
import { getRootCategories } from '../../services/apiCategories';
import SpinnerMini from '../../ui/SpinnerMini';
import FormRow from '../../ui/FormRow';
import { useState } from 'react';
import SelectSubCategory from './SelectSubCategory';
import { Option, Select } from '../../ui/Selection';

function SelectCategoryForm({ control, register }) {
  const [rootId, setRootId] = useState(null);
  const { data: rootCategories, isLoading } = useFetchData(
    'categories',
    getRootCategories
  );

  if (isLoading) return <SpinnerMini />;

  return (
    <FormRow>
      <Select
        defaultValue={'DEFAULT'}
        {...register('rootCategory', {
          required: 'This feild is required',
          onChange: (e) => setRootId(e.target.value),
        })}
      >
        <Option value='DEFAULT' disabled>
          Select Root Category
        </Option>
        {rootCategories.map((rootCat) => (
          <Option key={rootCat.id} value={rootCat.id}>
            {rootCat.englishName}
          </Option>
        ))}
      </Select>

      {rootId && <SelectSubCategory rootId={rootId} register={register} />}
    </FormRow>
  );
}

export default SelectCategoryForm;
