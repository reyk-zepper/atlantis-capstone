import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>start a new project</p>
      <Link href={"/AddProject"}>&oplus;</Link>
    </div>
  );
}
