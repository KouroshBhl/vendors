import Table from '../../ui/Table';
import BrandRow from './BrandRow';
import { useBrands } from './useBrands';

import Spinner from '../../ui/Spinner';

function BrandsTable() {
  const { brands, isLoading } = useBrands();

  if (isLoading) return <Spinner />;

  return (
    <Table columns='1fr 1fr 1fr 1fr 1fr 1fr'>
      <Table.Header>
        <div>Logo</div>
        <div>English Name</div>
        <div>Persian Name</div>
        <div>Slug</div>
        <div>Description</div>
        <div>Actions</div>
      </Table.Header>
      <Table.Body
        data={brands}
        render={(brand) => <BrandRow brand={brand} key={brand.id} />}
      />
    </Table>
  );
}

export default BrandsTable;
