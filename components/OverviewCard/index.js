import styled from "styled-components";
import Link from "next/link";
import { formatToEUR } from "@/helper/formatToEUR";

export default function OverviewCard({ project }) {
  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;
  const totalPrice = project.items
    .map((item) => Number(item.price))
    .reduce(sumUpArray, 0);

  return (
    <StyledProjectCard key={project.id}>
      <h2>Project: {project.name}</h2>
      <p>Total: {formatToEUR(totalPrice)}</p>
      <Link href={`/details/${project.id}`}>details</Link>
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
