import Heading from "../Heading";
import Navigation from "../Navigation";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <AppContainer>
      <Heading>p[al[ul</Heading>
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
