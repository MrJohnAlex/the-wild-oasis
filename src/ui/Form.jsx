import styled from "styled-components";

const StyleForm = styled.form`
  max-width: fit-content;
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem;
`;
export default function Form({ children }) {
  return <StyleForm>{children}</StyleForm>;
}
