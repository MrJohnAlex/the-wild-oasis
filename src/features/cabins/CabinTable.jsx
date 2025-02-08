import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

// const Table = styled.div`
//   width: 100%;
//   border-collapse: collapse;
//   padding: 1rem;
// `;
// const TableHeader = styled.div`
//   display: grid;
//   grid-template-columns: repeat(6, 1fr);
//   font-size: 1.2rem;
//   font-weight: 500;
//   border: 1px solid var(--color-grey-300);
//   text-align: left;
//   padding: 0.5rem 0.75rem;
//   text-transform: uppercase;
//   background-color: var(--color-grey-200);
// `;

// const TableRow = styled.div``;
export default function CabinTable() {
  const { isLoading, data: cabins } = useCabins();
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="repeat(6, 1fr)">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capicity</div>
          <div>Regular Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.name} />}
        />
      </Table>
    </Menus>
  );
}
