import { styled } from 'styled-components';
import Input from '../../ui/Input';
import { useFormContext } from 'react-hook-form';

function SelectProductType({ setProductType }) {
  const { register } = useFormContext();
  function handleChange(e) {
    setProductType(e.target.value);
  }
  return (
    <Container>
      <Wrapper>
        <RadionInput
          type='radio'
          id='giftcart'
          name='type'
          value='giftcart'
          onChange={handleChange}
          {...register('productType', {
            onChange: handleChange,
          })}
        />
        <label htmlFor='giftcart'>GiftCart</label>
      </Wrapper>

      <Wrapper>
        <RadionInput
          type='radio'
          id='optional'
          name='type'
          value='optional'
          onChange={handleChange}
          {...register('productType', {
            onChange: handleChange,
          })}
        />
        <label htmlFor='optional'>Optional</label>
      </Wrapper>
    </Container>
  );
}

export default SelectProductType;

const Container = styled.div`
  display: flex;
  gap: 2.4rem;

  > span {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.6rem;
  justify-content: center;
  align-items: center;
`;

const RadionInput = styled.input`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
