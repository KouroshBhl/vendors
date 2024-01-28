import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import { useForm, FormProvider } from 'react-hook-form';
import Button from '../../ui/Button';
import Textarea from '../../ui/Textarea';
import SelectCategoryForm from './SelectCategoryForm';
import Input from '../../ui/Input';
import Row from '../../ui/Row';
import SelectBrandForm from './SelectBrandForm';
import SelectProductType from './SelectProductType';
import { useState } from 'react';
import ProductGiftcart from './ProductGiftcart';
import ProductOptional from './ProductOptional';

function CreateProductForm() {
  const { control, handleSubmit, register, errors, unregister } = useForm();
  const [productType, setProdutType] = useState('');

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <FormProvider register={register} unregister={unregister}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Select Categories</h2>
        <SelectCategoryForm control={control} register={register} />

        <h2>Select Brand</h2>
        <SelectBrandForm register={register} />

        <h2>Configurations</h2>
        <SelectProductType setProdutType={setProdutType} />
        {productType === 'giftcart' ? <ProductGiftcart /> : <ProductOptional />}

        <h2>Product Title</h2>
        <FormRow error={errors?.title?.message}>
          <Input
            {...register('title', {
              required: 'This feild is required',
            })}
          />
        </FormRow>

        <h2>Product Description*</h2>
        <Row>
          <Textarea
            {...register('description', {
              required: 'This feild is required',
            })}
          />
        </Row>

        <h2>Before Buy*</h2>
        <Row>
          <Textarea
            {...register('beforeBuy', {
              required: 'This feild is required',
            })}
          />
        </Row>

        <div>
          <h2>Tips</h2>
        </div>
        <Row>
          <Textarea {...register('tips')} />
        </Row>

        <Button>Submit</Button>
      </Form>
    </FormProvider>
  );
}

export default CreateProductForm;
