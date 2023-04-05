import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <StyledStartingContainer>
      <StyledParagraph>start a new project</StyledParagraph>
      <StyledLink href={"/add-project"}>&oplus;</StyledLink>
    </StyledStartingContainer>
  );
}

const StyledStartingContainer = styled.div`
  border: solid black;
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
  &:hover {
    color: hotpink;
  }
`;
