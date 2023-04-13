import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledButton from "../StyledButton";

export default function Navigation() {
  const router = useRouter();
  const { id } = router.query;

  if (id !== undefined || router.pathname === "/add-project") {
    return (
      <StyledNavigation>
        <StyledButton
          type="button"
          onClick={() => router.back()}
          variant="back"
        >
          &larr; back
        </StyledButton>
      </StyledNavigation>
    );
  }
  return (
    <StyledNavigation>
      <StyledLink href={"/active"}>active</StyledLink>
      <StyledLink href={"/"}>X</StyledLink>
      <StyledLink href={"/done"}>done</StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.div`
  position: sticky;
  bottom: 0.5rem;
  width: 100%;
  background-color: rgb(var(--background-rgb));
  padding: 0.5rem;
  border: solid grey;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  position: relative;
  /* font-weight: bold; */
  font-size: 1.75rem;

  &:hover {
    text-decoration: underline;
    color: hotpink;
  }
`;
