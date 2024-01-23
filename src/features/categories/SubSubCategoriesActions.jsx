import { styled } from 'styled-components';
import { HiOutlineTrash, HiOutlinePencilSquare } from 'react-icons/hi2';

import Spinner from '../../ui/Spinner';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteSubSubCategory } from './useDeleteSubSubCategory';
import CreateSubSubCategoryForm from './CreateSubSubCategoryForm';

function SubSubCategoriesActions({ categoryID, data }) {
  const { isLoading, mutate } = useDeleteSubSubCategory();

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
          <CreateSubSubCategoryForm data={data} />
        </Modal.Window>
      </Modal>
    </StyledActions>
  );
}

export default SubSubCategoriesActions;

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
