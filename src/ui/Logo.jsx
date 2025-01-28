import styled from "styled-components";

const StyleLogo = styled.div`
  border-radius: var(--border-radius-lg);
`;
export default function Logo() {
  return (
    <StyleLogo>
      <img src="/src/assets/logo.png" alt="Logo" width="200" />
    </StyleLogo>
  );
}
