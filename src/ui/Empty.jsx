import styled from "styled-components";

const StyleEmpty = styled.div`
  text-align: center;
`;
export default function Empty({ children }) {
  return <StyleEmpty>{children}</StyleEmpty>;
}
