import styled from "styled-components";
import OverviewCard from "../OverviewCard";
import { useRouter } from "next/router";

export default function ProjectCards({ projects }) {
  const router = useRouter();

  return (
    <StyledProjectCards>
      {projects.length === 0 ? (
        <p>no project added to the page</p>
      ) : (
        projects?.map((project) => {
          return (
            <OverviewCard
              project={project}
              key={project.id}
              active={router.pathname === "/done"}
            />
          );
        })
      )}
    </StyledProjectCards>
  );
}
const StyledProjectCards = styled.section`
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
