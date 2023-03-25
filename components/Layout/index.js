import Heading from "../Heading";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Heading>p[al[ul</Heading>
      <main>{children}</main>
      <Navigation />
    </>
  );
}
