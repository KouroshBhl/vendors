import { useState } from 'react';
import Button from '../../ui/Button';
import Table from '../../ui/Table';
import { Name } from '../../ui/TableRowUi';
import CategoriesActions from './CategoriesActions';
import { Link } from 'react-router-dom';

function CategoryRow({ categories }) {
  const { englishName, persianName, id } = categories;
  const [subId, setSubId] = useState(null);

  return (
    <Table.Row>
      <Name>{englishName}</Name>
      <Name>{persianName}</Name>
      <CategoriesActions data={{ ...categories }} categoryID={id} />
      <Link to={`${englishName}-${id}`}>
        <Button variation='secondary' size='small'>
          Sub-Categories
        </Button>
      </Link>
    </Table.Row>
  );
}

export default CategoryRow;
