import styled from "styled-components";
import OverviewCard from "../OverviewCard";

export default function ProjectCards({ projects }) {
  return (
    <div>
      {projects?.map((project) => {
        return <OverviewCard project={project} key={project.id} />;
      })}
    </div>
  );
}
