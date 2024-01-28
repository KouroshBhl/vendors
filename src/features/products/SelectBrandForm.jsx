import { useFetchData } from '../../hooks/useFetchData';
import { getBrands } from '../../services/apiBrands';
import FormRow from '../../ui/FormRow';
import { Option, Select } from '../../ui/Selection';
import SpinnerMini from '../../ui/SpinnerMini';

function SelectBrandForm({ register }) {
  const { isLoading, data, error, refetch } = useFetchData('brands', getBrands);

  if (isLoading) return <SpinnerMini />;

  return (
    <FormRow>
      <Select
        defaultValue={'DEFAULT'}
        {...register('brand', {
          required: 'This feild is required',
        })}
      >
        <Option value='DEFAULT' disabled>
          Select Brand
        </Option>
        {data.map((rootCat) => (
          <Option key={rootCat.id} value={rootCat.id}>
            {rootCat.englishName}
          </Option>
        ))}
      </Select>
    </FormRow>
  );
}

export default SelectBrandForm;
