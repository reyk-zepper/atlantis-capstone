import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const { id } = router.query;

  if (id !== undefined || router.pathname === "/add-project") {
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
      <StyledLink href={"/active"}>Active</StyledLink>
      <StyledLink href={"/"}>HOME</StyledLink>
      <StyledLink href={"/done"}>Done</StyledLink>
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
  background-color: rgb(var(--background-rgb));

  border: solid rgb(var(--foreground-rgb)); 0.025rem;
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
