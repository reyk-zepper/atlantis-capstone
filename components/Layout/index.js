import Heading from "../Heading";
import Navigation from "../Navigation";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <AppContainer>
      <StyledHeadingContainer>
        <StyledHeading>p[al[ul</StyledHeading>
      </StyledHeadingContainer>
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
const StyledHeading = styled(Heading)`
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
    0 0 42px rgba(255, 214, 243, 0.6), 0 0 82px rgba(255, 214, 243, 0.6),
    0 0 92px rgba(255, 214, 243, 0.6), 0 0 102px rgba(255, 214, 243, 0.6),
    0 0 151px rgba(255, 214, 243, 0.6);
`;

const StyledHeadingContainer = styled.div`
  padding: 5rem;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 50rem;
  min-height: 5rem;
`;
