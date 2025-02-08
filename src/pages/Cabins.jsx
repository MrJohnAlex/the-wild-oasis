import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
export default function Cabins() {
  return (
    <>
      <Row>
        <Heading as="h1">All Cabin</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
      </Row>

      <AddCabin />
    </>
  );
}
