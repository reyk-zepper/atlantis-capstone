import styled from "styled-components";
import ProductCard from "../ProductCard";
import useStore from "../../hooks/useStore";

import OverviewCard from "../OverviewCard";

export default function ProjectCards() {
  const [projects] = useStore((state) => [state.projects]);
  return (
    <div>
      {projects?.map((project) => {
        return <OverviewCard project={project} key={project.id} />;
      })}
    </div>
  );
}
