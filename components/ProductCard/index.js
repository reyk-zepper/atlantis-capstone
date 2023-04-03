import Link from "next/link";
import styled from "styled-components";
import { formatToEUR } from "../../helper/formatToEUR";
import { useRouter } from "next/router";
import useStore from "../../hooks/useStore";

export default function ProductCard({ project, editState }) {
  const router = useRouter();
  const [moveToActive] = useStore((state) => [state.moveToActive]);
  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;
  const totalPrice = project?.items
    .map((item) => Number(item.price))
    .reduce(sumUpArray, 0);

  if (project === undefined) {
    return <h2>something went wrong</h2>;
  }

  const handleMoveToActive = (id) => {
    router.push("/Active");
    moveToActive(id);
  };

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
      {editState === "active" && <Link href={`/Edit/${project.id}`}>edit</Link>}
      {editState === "done" && (
        <button type="button" onClick={() => handleMoveToActive(project.id)}>
          move to active
        </button>
      )}
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
