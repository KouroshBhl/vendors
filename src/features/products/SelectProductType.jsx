import { styled } from 'styled-components';
import Input from '../../ui/Input';

function SelectProductType({ setProdutType }) {
  function handleChange(e) {
    setProdutType(e.target.value);
  }
  return (
    <Container>
      <Wrapper>
        <Input
          type='radio'
          id='giftcart'
          name='type'
          value='giftcart'
          onChange={handleChange}
        />
        <label htmlFor='giftcart'>GiftCart</label>
      </Wrapper>

      <Wrapper>
        <Input
          type='radio'
          id='optional'
          name='type'
          value='optional'
          onChange={handleChange}
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
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.6rem;
`;
