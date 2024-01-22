import AddCategory from '../features/categories/AddCategory';
import CategoriesTable from '../features/categories/CategoriesTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { useRootCategories } from '../features/categories/useRootCategories';
import Spinner from '../ui/Spinner';
import ErrorFallback from '../ui/ErrorFallback';

function Categories() {
  const { isLoading, error, refetch } = useRootCategories();

  if (isLoading) return <Spinner />;

  if (error)
    return <ErrorFallback resetErrorBoundary={refetch} error={error} />;

  return (
    <>
      <Row>
        <Heading as='h1'>Categories</Heading>
      </Row>

      <Row>
        <CategoriesTable />
        <div>
          <AddCategory />
        </div>
      </Row>
    </>
  );
}

export default Categories;
