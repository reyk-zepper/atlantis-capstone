import Heading from "../Heading";

export default function Layout({ children }) {
  return (
    <>
      <Heading>p[al[ul</Heading>
      <main>{children}</main>
    </>
  );
}
