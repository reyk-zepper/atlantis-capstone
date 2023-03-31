import Link from "next/link";
import styled from "styled-components";

export default function ProductCard({ project }) {
  let totalPrice = 0;

  return (
    <StyledProjectCard key={project.id}>
      <h2>Project: {project.name}</h2>
      <ul>
        {project.items.map((item) => {
          totalPrice += Number(item.price);
          return (
            <li key={item.id}>
              <p>{item.name.toUpperCase()}</p>
              <p>
                {item.value.toUpperCase()}: {item.price}$
              </p>
            </li>
          );
        })}
      </ul>
      <p>Total: {totalPrice}$</p>
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
