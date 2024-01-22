import { useState } from 'react';
import Button from '../../ui/Button';
import Table from '../../ui/Table';
import { Name } from '../../ui/TableRowUi';
import CategoriesActions from './CategoriesActions';
import SubCategories from './SubCategories';

function CategoryRow({ categories }) {
  const { englishName, persianName, id } = categories;
  const [subId, setSubId] = useState(null);

  return (
    <Table.Row>
      <Name>{englishName}</Name>
      <Name>{persianName}</Name>
      <CategoriesActions data={{ ...categories }} categoryID={id} />
      <Name>X</Name>

      {/* <Button size='small' variation='secondary' onClick={() => setSubId(id)}>
        Show sub categories
      </Button>
      {subId && <SubCategories id={subId} />} */}
    </Table.Row>
  );
}

export default CategoryRow;
