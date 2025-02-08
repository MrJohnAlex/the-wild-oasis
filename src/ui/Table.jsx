import { createContext, useContext } from "react";
import styled from "styled-components";
import Empty from "./Empty";

const Common = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid var(--color-grey-300);
  align-items: center;
  text-align: left;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  background-color: var(--color-grey-200);
`;
const StyleTable = styled(Common)``;
const StyleHeader = styled(Common)``;
const StyleBody = styled.section`
  padding: 0.5rem 0.75rem;
`;
const StyleRow = styled(Common)``;
const TableContext = createContext();
function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyleTable role="table">{children}</StyleTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyleHeader role="row" as="header" columns={columns}>
      {children}
    </StyleHeader>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show!</Empty>;
  return <StyleBody>{data.map(render)}</StyleBody>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyleRow role="row" columns={columns}>
      {children}
    </StyleRow>
  );
}

Table.Header = Header;

Table.Body = Body;

Table.Row = Row;
export default Table;
