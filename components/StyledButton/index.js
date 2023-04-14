import styled, { css } from "styled-components";

const buttonStyles = {
  submit: css`
    width: 6rem;
    font-size: 1rem;
    padding: 0.5rem;
    background-color: rgb(73, 182, 117);

    &:hover {
      transform: scale(0.8);
    }
  `,
  plus: css`
    width: 4rem;
    font-size: 1.5rem;
    &:hover {
      transform: scale(0.8);
    }
  `,
  back: css`
    width: 5rem;
    font-size: 1.25rem;
    &:hover {
      transform: scale(0.8);
    }
  `,
  delete: css`
    width: 5rem;
    font-size: 1.25rem;
    color: white;
    background-color: rgb(219, 88, 86);

    &:hover {
      transform: scale(0.8);
    }
  `,
  move: css`
    width: 13rem;
    font-size: 1.25rem;

    &:hover {
      transform: scale(0.8);
    }
  `,
  start: css`
    width: 9rem;
    font-size: 1.25rem;

    &:hover {
      transform: scale(0.8);
    }
  `,
};

export default function StyledButton({ children, variant, onClick, type }) {
  const StyledVariantButton = styled.button`
    ${buttonStyles[variant]}
  `;

  return (
    <StyledVariantButton onClick={onClick} type={type}>
      {children}
    </StyledVariantButton>
  );
}
