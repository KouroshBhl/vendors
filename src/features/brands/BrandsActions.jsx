import { styled } from 'styled-components';
import { HiOutlineTrash, HiOutlinePencilSquare } from 'react-icons/hi2';
import { useDeleteBrand } from './useDeleteBrand';

import Spinner from '../../ui/Spinner';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import CreateBrandForm from './CreateBrandForm';

function BrandsActions({ brandID, data }) {
  const { isLoading, mutate } = useDeleteBrand();

  if (isLoading) return <Spinner />;

  return (
    <StyledActions>
      <Modal>
        <Modal.Open opens='delete'>
          <Button>
            <HiOutlineTrash />
          </Button>
        </Modal.Open>
        <Modal.Window name='delete'>
          <ConfirmDelete
            resourceName={`${data.englishName} brand`}
            onConfirm={() => mutate(brandID)}
            disabled={isLoading}
          />
        </Modal.Window>

        <Modal.Open opens='edit'>
          <Button>
            <HiOutlinePencilSquare />
          </Button>
        </Modal.Open>

        <Modal.Window name='edit'>
          <CreateBrandForm editBrand={data} />
        </Modal.Window>
      </Modal>
    </StyledActions>
  );
}

export default BrandsActions;

const StyledActions = styled.div`
  display: flex;
  gap: 1.4rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    color: var(--color-brand-700);
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
`;
