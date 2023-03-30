import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const { id } = router.query;

  if (id !== undefined || router.pathname === "/AddProject") {
    return (
      <StyledNavigation>
        <button type="button" onClick={() => router.back()}>
          &larr; back
        </button>
      </StyledNavigation>
    );
  }
  return (
    <StyledNavigation>
      <StyledLink href={"/"}>HOME</StyledLink>
      <StyledLink href={"/Active"}>Active Projects</StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  gap: 3rem;
  position: sticky;
  bottom: 0;
  background-color: white;

  border: solid black 0.025rem;
  padding: 1rem;
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  position: relative;
  font-weight: bold;
  font-size: 2rem;

  &:hover {
    text-decoration: underline;
    color: hotpink;
  }
`;
