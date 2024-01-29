import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import { useForm, FormProvider } from 'react-hook-form';
import Button from '../../ui/Button';
import Textarea from '../../ui/Textarea';
import SelectCategoryForm from './SelectCategoryForm';
import Input from '../../ui/Input';
import SelectBrandForm from './SelectBrandForm';
import SelectProductType from './SelectProductType';
import { useState } from 'react';
import ProductGiftcart from './ProductGiftcart';
import ProductOptional from './ProductOptional';
import { useCreateProductKey } from './useCreateProductKey';
import FileInput from '../../ui/FileInput';
import SpinnerMini from '../../ui/SpinnerMini';
import { styled } from 'styled-components';

function CreateProductForm() {
  const { control, handleSubmit, register, formState, unregister } = useForm();
  const [productType, setProductType] = useState('');
  const { status, mutateCreateProductKey } = useCreateProductKey();
  const { errors } = formState;
  console.log(errors);

  function onSubmit(data) {
    if (data.productType === 'giftcart')
      mutateCreateProductKey({ ...data, thumbnail: data?.thumbnail?.[0] });
  }

  return (
    <FormProvider register={register} unregister={unregister}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Select Categories *</Label>
        <FormRow>
          <SelectCategoryForm control={control} register={register} />
        </FormRow>

        <FormRow label='Select Brand *'>
          <SelectBrandForm register={register} />
        </FormRow>

        <FormRow label='Product Type *'>
          <SelectProductType setProductType={setProductType} />
        </FormRow>
        {productType === 'giftcart' && <ProductGiftcart />}
        {productType === 'optional' && <ProductOptional />}

        <FormRow error={errors?.title?.message} label='Product Title *'>
          <Input
            {...register('title', {
              required: 'This feild is required',
            })}
          />
        </FormRow>

        <FormRow
          error={errors?.description?.message}
          label='Product Description *'
        >
          <Textarea
            {...register('description', {
              required: 'This feild is required',
            })}
          />
        </FormRow>

        <FormRow label='Before Buy *' error={errors?.beforeBuy?.message}>
          <Textarea
            {...register('beforeBuy', {
              required: 'This feild is required',
            })}
          />
        </FormRow>

        <FormRow label='Product Thumbnail *' error={errors?.thumbnail?.message}>
          <FileInput {...register('thumbnail')} />
        </FormRow>

        <FormRow label='Note for Buyers'>
          <Textarea {...register('tips')} />
        </FormRow>

        <FormRow label='Note for other admins'>
          <Textarea {...register('adminNote')} />
        </FormRow>

        <FormRow>
          <Button size='large' disabled={status === 'pending'} type='loading'>
            {status === 'pending'
              ? 'Creating/Uploading...'
              : 'Create new product'}
            {status === 'pending' && <SpinnerMini />}
          </Button>
        </FormRow>
      </Form>
    </FormProvider>
  );
}

export default CreateProductForm;

const Label = styled.label`
  font-weight: 500;
`;
