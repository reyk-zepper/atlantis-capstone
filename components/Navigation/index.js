import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href={"/"}>HOME</Link>
      <Link href={"/Active"}>Active Projects</Link>
    </div>
  );
}
