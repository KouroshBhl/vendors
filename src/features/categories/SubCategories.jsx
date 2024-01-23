import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { useGetSubCategories } from './useGetSubCategories';
import SubCategoryRow from './SubCategoryRow';
import { Link, useParams } from 'react-router-dom';
import CreateSubCategory from './AddSubCategory';

function SubCategories() {
  const { subCategoryId: getSubParam } = useParams();
  const fullParam = getSubParam?.split('-');
  const { isLoading, subCategories, error, refetch } = useGetSubCategories(
    fullParam.at(1)
  );

  if (isLoading) return <Spinner />;

  return (
    <>
      <Link to={-1}>&larr; Back to Root categories</Link>
      <h2>{fullParam.at(0).toUpperCase()} Sub-Categories</h2>
      <Table columns='1fr 1fr 1fr'>
        <Table.Row>
          <div>ENG NAME</div>
          <div>IR NAME</div>
          <div>ACTIONS</div>
        </Table.Row>
        <Table.Body
          data={subCategories}
          render={(sub) => <SubCategoryRow data={sub} key={sub.id} />}
        ></Table.Body>
      </Table>
      <CreateSubCategory />
    </>
  );
}

export default SubCategories;
