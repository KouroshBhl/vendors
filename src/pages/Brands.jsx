import Row from '../ui/Row';
import Heading from '../ui/Heading';
import BrandsTable from '../features/brands/BrandsTable';
import { useBrands } from '../features/brands/useBrands';

function Brands() {
  const { brands } = useBrands();
  console.log(brands);
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Brands</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <BrandsTable />
      </Row>
    </>
  );
}

export default Brands;
