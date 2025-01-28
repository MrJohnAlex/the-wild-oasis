import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StyleAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
`;

const StyleMain = styled.main`
  background-color: var(--color-gre-100);
  padding: 2.5rem 3.2rem;
  overflow: scroll;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export default function AppLayout() {
  return (
    <StyleAppLayout>
      <Header />
      <Sidebar />
      <StyleMain>
        <Container>
          <Outlet />
        </Container>
      </StyleMain>
    </StyleAppLayout>
  );
}
