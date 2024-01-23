import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import { useCreateSubCategory } from './useCreateSubCategory';
import { useParams } from 'react-router-dom';

function CreateSubCategoryForm({ onCloseModal }) {
  const { errors, register, handleSubmit, reset } = useForm();
  const { isCreatingSubCategory, mutateCreateSubCategory } =
    useCreateSubCategory();
  const { subCategoryId } = useParams();
  const splitCategoryParam = subCategoryId.split('-');
  console.log(splitCategoryParam);

  function onSubmit(data) {
    console.log(data);
    mutateCreateSubCategory({
      ...data,
      rootCategory: splitCategoryParam.at(1),
    });
    reset();
    onCloseModal();
  }

  return (
    <Form type='modal' onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label='Sub-Category English name'
        error={errors?.englishName?.message}
      >
        <Input
          type='text'
          id='englishName'
          {...register('englishName', {
            required: 'This feild is required',
          })}
        />
      </FormRow>

      <FormRow
        label='Sub-Category Persian name'
        error={errors?.persianName?.message}
      >
        <Input
          type='text'
          id='persianName'
          {...register('persianName', {
            required: 'This feild is required',
          })}
        />
      </FormRow>

      <Button disabled={isCreatingSubCategory}>Add new sub-category</Button>
    </Form>
  );
}

export default CreateSubCategoryForm;
