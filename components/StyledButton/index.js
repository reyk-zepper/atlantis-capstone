import styled, { css } from "styled-components";

const buttonStyles = {
  submit: css`
    width: 6rem;
    font-size: 1rem;
    padding: 0.5rem;

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
};

export default function StyledButton({ children, variant }) {
  const StyledVariantButton = styled.button`
    ${buttonStyles[variant]}
  `;

  return <StyledVariantButton>{children}</StyledVariantButton>;
}
