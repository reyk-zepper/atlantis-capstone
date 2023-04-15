import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <StyledStartingContainer>
      <StyledParagraph>start a</StyledParagraph>
      <StyledLink href={"/add-project"}>&oplus;</StyledLink>
      <StyledParagraph>new project</StyledParagraph>
    </StyledStartingContainer>
  );
}

const StyledStartingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StyledParagraph = styled.p`
  font-weight: bold;
  font-size: 2rem;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  position: relative;
  font-size: 3rem;
  cursor: pointer;
  text-shadow: 0 0 1px #fff, 0 0 10px #fff, 0 0 11px #fff,
    0 0 21px rgba(255, 214, 243, 0.6), 0 0 41px rgba(255, 214, 243, 0.6),
    0 0 46px rgba(255, 214, 243, 0.6), 0 0 51px rgba(255, 214, 243, 0.6),
    0 0 76px rgba(255, 214, 243, 0.6);
  &:hover {
    color: hotpink;
    text-decoration: none;
  }
`;
