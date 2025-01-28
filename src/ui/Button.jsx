import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1rem;
    padding: 0.78rem 1rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  large: css`
    font-size: 2rem;
    padding: 1rem 2rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
};
const variants = {
  primary: css`
    background-color: var(--color-indigo-600);
    color: var(--color-grey-0);
    &:hover {
      background-color: var(--color-indigo-800);
    }
  `,
  secondary: css`
    background-color: var(--color-grey-100);
    border: 1px solid var(--color-grey-500);
    color: var(--color-grey-900);
    &:hover {
      background-color: var(--color-grey-600);
    }
  `,
  danger: css`
    background-color: var(--color-red-600);
    color: var(--color-grey-0);
    &:hover {
      background-color: var(--color-red-700);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  ${(props) => sizes[props.size]}
  ${(props) => variants[props.variant]}
`;

Button.defaultProps = {
  size: "medium",
  variant: "primary",
};
export default Button;
