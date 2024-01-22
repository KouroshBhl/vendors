import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { useGetSubCategories } from './useGetSubCategories';
import SubCategoryRow from './SubCategoryRow';

function SubCategories({ id }) {
  const { isLoading, subCategories, error, refetch } = useGetSubCategories(id);

  if (isLoading) return <Spinner />;

  return (
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
  );
}

export default SubCategories;
