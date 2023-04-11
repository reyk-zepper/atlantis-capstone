import Navigation from "../Navigation";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <AppContainer>
      <StyledHeading>p[al[ul</StyledHeading>
      <StyledMain>{children}</StyledMain>
      <Navigation />
    </AppContainer>
  );
}
const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledHeading = styled.h1`
  text-align: right;
  width: 100%;
  padding: 1rem 1.25rem 0.5rem;
  color: #fff;
  text-shadow: 0 0 1px #fff, 0 0 10px #fff, 0 0 11px #fff,
    0 0 21px rgba(255, 214, 243, 0.6), 0 0 41px rgba(255, 214, 243, 0.6),
    0 0 46px rgba(255, 214, 243, 0.6), 0 0 51px rgba(255, 214, 243, 0.6),
    0 0 76px rgba(255, 214, 243, 0.6);
`;

const StyledHeadingContainer = styled.div`
  padding: 5rem;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 50rem;
  min-height: 5rem;
`;
