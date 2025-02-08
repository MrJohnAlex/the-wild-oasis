import styled from "styled-components";
import Error from "./Error";
const StyleFormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
  font-size: 18px;
`;
export default function FormRow({ label, children, error }) {
  return (
    <StyleFormRow>
      {label && <Label htmlFor={children.props.id}>{label}:</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyleFormRow>
  );
}
