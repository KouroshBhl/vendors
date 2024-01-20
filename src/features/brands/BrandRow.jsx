import { styled } from 'styled-components';
import Table from '../../ui/Table';
import BrandsActions from './BrandsActions';

function BrandRow({ brand }) {
  const { englishName, persianName, slugName, brandLogo, id } = brand;
  return (
    <Table.Row>
      <Img src={brandLogo} />
      <Brand>{englishName}</Brand>
      <Brand>{persianName}</Brand>
      <Slug>{slugName}</Slug>
      <BrandsActions brandID={id} />
    </Table.Row>
  );
}

export default BrandRow;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Brand = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Slug = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;
