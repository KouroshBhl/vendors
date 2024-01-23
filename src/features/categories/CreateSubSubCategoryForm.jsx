import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import { useParams } from 'react-router-dom';
import { useCreateSubSubCategory } from './useCreateSubSubCategory';

function CreateSubSubCategoryForm({ onCloseModal }) {
  const { errors, register, handleSubmit, reset } = useForm();
  const { isCreatingSubSubCategory, mutateCreateSubSubCategory } =
    useCreateSubSubCategory();
  const { subSubCategoryId, subCategoryId } = useParams();
  const splitCategoryParam = subSubCategoryId.split('-');
  console.log(splitCategoryParam);

  function onSubmit(data) {
    console.log(data);
    mutateCreateSubSubCategory({
      ...data,
      // rootCategory: splitCategoryParam.at(1),
      subCategory1: splitCategoryParam.at(1),
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

      <Button disabled={isCreatingSubSubCategory}>Add new sub-category</Button>
    </Form>
  );
}

export default CreateSubSubCategoryForm;
