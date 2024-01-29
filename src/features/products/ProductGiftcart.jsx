import { useState } from 'react';
import Button from '../../ui/Button';
import ProductGiftcartAddRegion from './ProductGiftcartAddRegion';
import Table from '../../ui/Table';
import { styled } from 'styled-components';

function ProductGiftcart() {
  const [renderTime, setRenderTime] = useState(null);
  const loop = Array.from({ length: renderTime });

  function handleNewRegion() {
    setRenderTime((render) => render + 1);
  }

  return (
    <Table columns='8rem 8rem 3fr 1fr 1fr 5rem'>
      <Table.Header>
        <div>Region</div>
        <div>Currency</div>
        <div>Values</div>
        <div>Link</div>
        <div>Note</div>
        <div>Delete</div>
      </Table.Header>

      {renderTime &&
        loop.map((_, i) => (
          <ProductGiftcartAddRegion
            key={i}
            setRenderTime={setRenderTime}
            valueId={i + 1}
            loop={loop}
          />
        ))}
      <ButtonWrapper>
        <Button size='small' onClick={handleNewRegion} type='button'>
          Add new region
        </Button>
      </ButtonWrapper>
    </Table>
  );
}

export default ProductGiftcart;

const ButtonWrapper = styled.div`
  margin: 1.2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
