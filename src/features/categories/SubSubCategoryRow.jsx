import Table from '../../ui/Table';

function SubSubCategoryRow({ data }) {
  const { englishName, persianName } = data;

  return (
    <Table.Row>
      <div>{englishName}</div>
      <div>{persianName}</div>
    </Table.Row>
  );
}

export default SubSubCategoryRow;
