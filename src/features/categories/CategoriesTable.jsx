import Table from '../../ui/Table';
import CategoryRow from './CategoryRow';
import { useRootCategories } from './useRootCategories';

function CategoriesTable() {
  const { rootCategories } = useRootCategories();
  return (
    <Table columns='1fr 1fr 1fr 1fr 1fr'>
      <Table.Header>
        <div>Eng name</div>
        <div>IR name</div>
        <div>Actions</div>
        <div>Sub Categories Count</div>
        <div>Sub Categories Actions</div>
      </Table.Header>

      <Table.Body
        data={rootCategories}
        render={(category) => (
          <CategoryRow key={category.id} categories={category} />
        )}
      />
    </Table>
  );
}

export default CategoriesTable;
