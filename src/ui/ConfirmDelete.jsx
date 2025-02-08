import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyleConfirmDelete = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
  width: 25rem;
  & div {
    display: flex;
    width: 100%;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
  }
`;
export default function ConfirmDelete({
  resourceName,
  disabled,
  onConfirm,
  onCloseModal,
}) {
  return (
    <StyleConfirmDelete>
      <Heading as="h3">Delete {resourceName} </Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <div>
        <Button variant="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variant="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyleConfirmDelete>
  );
}
