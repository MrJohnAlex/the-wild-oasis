import styled from "styled-components";
import CreateCabin from "./CreateCabin";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const CabinName = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
`;
const Img = styled.img`
  width: 75%;
  border-radius: var(--border-radius-md);
  text-align: center;
`;
const Price = styled.div`
  font-weight: bold;
`;
const Discount = styled.div`
  color: var(--color-green-400);
  font-size: 1em;
  font-weight: bold;
`;
export default function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    image,
    max_capacity,
    regular_price,
    discount,
    description,
  } = cabin;
  const { isDeleting, deleteCabinMutate } = useDeleteCabin();
  const { isCreating, createCabinMutate } = useCreateCabin();

  function handleDuplicate() {
    createCabinMutate({
      name: `Copy of ${name}`,
      image,
      max_capacity,
      regular_price,
      discount,
      description,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <CabinName>{name}</CabinName>
      <div>Fit up tp {max_capacity} guests</div>
      <Price>$ {regular_price}</Price>
      <Discount>$ {discount}</Discount>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.Lists id={cabinId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.Lists>
            <Modal.Window name="edit">
              <CreateCabin cabinEdit={cabin} />
            </Modal.Window>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabinMutate(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}
