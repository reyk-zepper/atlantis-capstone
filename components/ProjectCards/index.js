import styled from "styled-components";
import OverviewCard from "../OverviewCard";

export default function ProjectCards({ projects }) {
  return (
    <div>
      {projects.length === 0 ? (
        <p>no project added to the page</p>
      ) : (
        projects?.map((project) => {
          return <OverviewCard project={project} key={project.id} />;
        })
      )}
    </div>
  );
}
