import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import { useForm, useController } from 'react-hook-form';
import Button from '../../ui/Button';
import Textarea from '../../ui/Textarea';
import SelectCategoryForm from './SelectCategoryForm';

function CreateProductForm() {
  const { control, handleSubmit, register } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SelectCategoryForm control={control} register={register} />

      <h2>Select Brand</h2>

      <FormRow>
        <Textarea />
      </FormRow>

      <Button>Submit</Button>
    </Form>
  );
}

export default CreateProductForm;
