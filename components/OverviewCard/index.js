import styled from "styled-components";
import Link from "next/link";

export default function OverviewCard({ project }) {
  return (
    <StyledProjectCard key={project.id}>
      <h2>Project: {project.name}</h2>
      <p>Total: {totalPrice}$</p>
      <Link href={`/Details/${project.id}`}>details</Link>
    </StyledProjectCard>
  );
}

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;
