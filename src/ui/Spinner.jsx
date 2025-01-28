import styled from "styled-components";

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-radius: 50%;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--color-indigo-600);
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default function Spinner() {
  return <LoadingSpinner />;
}
