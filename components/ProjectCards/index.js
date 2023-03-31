import styled from "styled-components";
import ProductCard from "../ProductCard";
import useStore from "../../hooks/useStore";

export default function ProjectCards() {
  const [projects] = useStore((state) => [state.projects]);
  return (
    <div>
      {projects?.map((project) => {
        return <ProductCard key={project.id} project={project} />;
      })}
    </div>
  );
}
