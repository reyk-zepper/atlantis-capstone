import styled from "styled-components";
import ProductCard from "../ProductCard";
import useStore from "../../hooks/useStore";

export default function ProjectCards() {
  const [projects] = useStore((state) => [state.projects]);
  const hasData = projects && projects.length > 0;
  return (
    <>
      {hasData && (
        <div>
          {projects?.map((project) => {
            return (
              <ProductCard
                key={project.id}
                project={project}
                hasData={hasData}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
