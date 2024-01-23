import { Link } from 'react-router-dom';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Button from '../../ui/Button';

function SubCategoryRow({ data }) {
  const { englishName, persianName, id } = data;
  return (
    <Table.Row>
      <div>{englishName}</div>
      <div>{persianName}</div>
      <Link to={`${englishName}-${id}`}>
        <Button variation='secondary' size='small'>
          Sub-Categories
        </Button>
      </Link>
    </Table.Row>
  );
}

export default SubCategoryRow;
