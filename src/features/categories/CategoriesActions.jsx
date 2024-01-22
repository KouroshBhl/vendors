import { styled } from 'styled-components';
import {
  HiOutlineTrash,
  HiOutlinePencilSquare,
  HiOutlineBars3BottomLeft,
} from 'react-icons/hi2';

import Spinner from '../../ui/Spinner';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteCategory } from './useDeleteCategory';
import SubCategories from './SubCategories';

function CategoriesActions({ categoryID, data }) {
  const { isLoading, mutate } = useDeleteCategory(categoryID);

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
            resourceName={`category`}
            onConfirm={() => mutate(categoryID)}
          />
        </Modal.Window>

        <Modal.Open opens='edit'>
          <Button>
            <HiOutlinePencilSquare />
          </Button>
        </Modal.Open>

        <Modal.Window name='edit'>
          {/* <CreateBrandForm editBrand={data} /> */}
        </Modal.Window>

        <Modal.Open opens='subCategories'>
          <Button>
            <HiOutlineBars3BottomLeft />
          </Button>
        </Modal.Open>
        <Modal.Window name='subCategories'>
          <SubCategories id={categoryID} />
        </Modal.Window>
      </Modal>
    </StyledActions>
  );
}

export default CategoriesActions;

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
