import { useState } from 'react';
import Button from '../../ui/Button';
import ProductGiftcartAddRegion from './ProductGiftcartAddRegion';
import Table from '../../ui/Table';

function ProductGiftcart() {
  const [renderTime, setRenderTime] = useState(null);
  const loop = Array.from({ length: renderTime });
  console.log(loop);

  function handleNewRegion() {
    setRenderTime((render) => render + 1);
  }

  return (
    <Table columns='0.5fr 0.5fr 3fr 0.2fr'>
      <Table.Header>
        <div>Region</div>
        <div>Currency</div>
        <div>Values</div>
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
      <Button size='small' onClick={handleNewRegion} type='button'>
        Add new region
      </Button>
    </Table>
  );
}

export default ProductGiftcart;
