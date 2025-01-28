import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabin from "../features/cabins/CreateCabin";
export default function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row>
        <Heading as="h1">All Cabin</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
      </Row>
      <Button size="small" onClick={() => setShowForm(!showForm)}>
        {" "}
        Add new cabin{" "}
      </Button>
      {showForm && (
        <Row type="vertical">
          <CreateCabin />
        </Row>
      )}
    </>
  );
}
