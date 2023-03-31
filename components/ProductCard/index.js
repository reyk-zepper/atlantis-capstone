import Link from "next/link";
import styled from "styled-components";
import { formatToEUR } from "../../helper/formatToEUR";

export default function ProductCard({ project }) {
  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;
  const totalPrice = project?.items
    .map((item) => item.price)
    .reduce(sumUpArray, 0);
  if (project === undefined) {
    return <h2>something went wrong</h2>;
  }
  return (
    <StyledProjectCard key={project.id}>
      <h2>Project: {project.name}</h2>
      <ul>
        {project.items.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.name.toUpperCase()}</p>
              <p>
                {item.value.toUpperCase()}: {formatToEUR(item.price)}
              </p>
            </li>
          );
        })}
      </ul>
      <p>Total: {formatToEUR(totalPrice)}</p>
      <Link href={`/Edit/${project.id}`}>edit</Link>
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
