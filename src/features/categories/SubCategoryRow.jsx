import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { useGetSubCategories } from './useGetSubCategories';

function SubCategoryRow({ data }) {
  return (
    <Table.Row>
      <div>{data.englishName}</div>
      <div>{data.persianName}</div>
    </Table.Row>
  );
}

export default SubCategoryRow;
