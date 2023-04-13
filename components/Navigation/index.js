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
      <StyledHomeLink href={"/"}>
        <svg
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="60px"
          height="60px"
        >
          {" "}
          <path d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z" />
        </svg>
      </StyledHomeLink>
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
const StyledHomeLink = styled(StyledLink)`
  font-size: 2rem;
`;
