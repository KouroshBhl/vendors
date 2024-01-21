import Row from '../ui/Row';
import Heading from '../ui/Heading';
import BrandsTable from '../features/brands/BrandsTable';
import { useBrands } from '../features/brands/useBrands';
import Spinner from '../ui/Spinner';
import ErrorFallback from '../ui/ErrorFallback';
import AddBrand from '../ui/AddBrand';

function Brands() {
  const { isLoading, error, refetch } = useBrands();

  if (isLoading) return <Spinner />;

  if (error)
    return <ErrorFallback error={error} resetErrorBoundary={refetch} />;

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Brands</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <BrandsTable />
        <div>
          <AddBrand />
        </div>
      </Row>
    </>
  );
}

export default Brands;
