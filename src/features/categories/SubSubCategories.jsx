import { Link, useParams } from 'react-router-dom';
import Table from '../../ui/Table';
import { useGetSubSubCategories } from './useGetSubSubCategories';
import SubSubCategoriesRow from './SubSubCategoryRow';
import AddSubSubCategories from './AddSubSubCategories';

function SubSubCategories() {
  const { subSubCategoryId: getSubParam } = useParams();
  const fullParam = getSubParam?.split('-');
  const { isLoading, subSubCategories, error, refetch } =
    useGetSubSubCategories(fullParam.at(1));

  console.log(subSubCategories);

  if (!subSubCategories) return;

  return (
    <>
      <Link to={-1}>&larr; Back to Parent categories</Link>
      <h2>{fullParam.at(0).toUpperCase()} Sub-Categories</h2>
      <Table columns='1fr 1fr 1fr'>
        <Table.Row>
          <div>ENG NAME</div>
          <div>IR NAME</div>
          <div>ACTIONS</div>
        </Table.Row>
        <Table.Body
          data={subSubCategories}
          render={(sub) => <SubSubCategoriesRow data={sub} key={sub.id} />}
        ></Table.Body>
      </Table>
      <AddSubSubCategories />
    </>
  );
}

export default SubSubCategories;
