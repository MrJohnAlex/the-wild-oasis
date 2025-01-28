import styled from "styled-components";

export default function Error({ children }) {
  const Error = styled.span`
    color: var(--color-red-600);
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
  `;
  return <Error>{children}</Error>;
}
