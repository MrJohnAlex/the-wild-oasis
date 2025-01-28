import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 1rem;
`;
const TableHeader = styled.th`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid var(--color-grey-300);
  text-align: left;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  background-color: var(--color-grey-200);
`;

const TableRow = styled.tr``;
export default function CabinTable() {
  const { isLoading, data } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  if (isLoading) return <Spinner />;

  return (
    <Table>
      <TableHeader>
        <th></th>
        <th>Cabin</th>
        <th>Capicity</th>
        <th>Regular Price</th>
        <th>Discount</th>
        <th></th>
      </TableHeader>
      {data.map((cabin) => (
        <TableRow key={cabin.name}>
          <CabinRow cabin={cabin} />
        </TableRow>
      ))}
    </Table>
  );
}
