import Table from '../../ui/Table';
import BrandRow from './BrandRow';
import { useBrands } from './useBrands';

function BrandsTable() {
  const { brands, isLoading } = useBrands();
  console.log(brands);

  if (isLoading) return;

  return (
    <Table columns='1fr 1fr 1fr 1fr 1fr'>
      <Table.Header>
        <div>Logo</div>
        <div>English Name</div>
        <div>Persian Name</div>
        <div>Slug</div>
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
