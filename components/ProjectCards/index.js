import styled from "styled-components";
import ProductCard from "../ProductCard";
import useStore from "../../hooks/useStore";
import Link from "next/link";

export default function ProjectCards() {
  const [projects] = useStore((state) => [state.projects]);
  return (
    <div>
      {projects?.map((project) => {
        return (
          <>
            <ProductCard key={project.id} project={project} />
            <Link href={`/Details/${project.id}`}>details</Link>
          </>
        );
      })}
    </div>
  );
}
