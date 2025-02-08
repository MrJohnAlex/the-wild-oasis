import styled from "styled-components";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { useCabins } from "../features/cabins/useCabins";

const StyleSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 2rem 2.5rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
export default function Sidebar() {
  const { isLoading, cabins } = useCabins();
  return (
    <StyleSidebar>
      <Logo />
      <NavMenu />
    </StyleSidebar>
  );
}
