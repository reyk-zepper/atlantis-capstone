import styled from "styled-components";
import OverviewCard from "../OverviewCard";

export default function ProjectCards({ projects }) {
  return (
    <StyledProjectCards>
      {projects.length === 0 ? (
        <p>no project added to the page</p>
      ) : (
        projects?.map((project) => {
          return <OverviewCard project={project} key={project.id} />;
        })
      )}
    </StyledProjectCards>
  );
}
const StyledProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
