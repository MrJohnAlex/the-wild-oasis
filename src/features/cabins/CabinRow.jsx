import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    image,
    max_capacity,
    regular_price,
    discount,
  } = cabin;
  const TableData = styled.td`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    padding: 10px;
  `;
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
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => toast.error(error.message),
  });
  return (
    <>
      <TableData>
        <Img src={image} />
        <CabinName>{name}</CabinName>
        <div>Fit up tp {max_capacity} guests</div>
        <Price>$ {regular_price}</Price>
        <Discount>$ {discount}</Discount>
        <button disabled={isDeleting} onClick={() => mutate(cabinId)}>
          {" "}
          Delete{" "}
        </button>
      </TableData>
    </>
  );
}
