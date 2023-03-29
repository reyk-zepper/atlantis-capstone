import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  if (router.pathname === "/AddProject") {
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
      <Link href={"/"}>HOME</Link>
      <Link href={"/Active"}>Active Projects</Link>
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
