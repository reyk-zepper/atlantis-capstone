import Link from "next/link";
import styled from "styled-components";
import { formatToEUR } from "../../helper/formatToEUR";
import { useRouter } from "next/router";
import useStore from "../../hooks/useStore";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { chartOptions } from "../../helper/chartOptions";
import { createChartData } from "../../helper/createChartData";
import useDarkMode from "@/hooks/useDarkMode";
import { sumTotalPrice } from "../../helper/sumTotalPrice";
import formatTime from "@/helper/formatTime";

export default function ProductCard({ project, editState }) {
  const isDarkMode = useDarkMode();
  const router = useRouter();
  const [moveToActive] = useStore((state) => [state.moveToActive]);
  const labelColor = isDarkMode ? "white" : "black";

  if (!project) {
    return <h2>something went wrong</h2>;
  }

  const handleMoveToActive = (id) => {
    router.push("/active");
    moveToActive(id);
  };

  return (
    <StyledProjectCard key={project.id}>
      <h2>Project: {project.name}</h2>
      <Bar
        data={createChartData(project)}
        options={chartOptions(false, labelColor)}
      />
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
      <p>Total: {formatToEUR(sumTotalPrice(project))}</p>
      <p>Working Time: {formatTime(project.workingTime)}</p>
      {editState === "active" && <Link href={`/edit/${project.id}`}>edit</Link>}
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
  border: 1px solid rgb(var(--foreground-rgb));
  gap: 10px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const StyledEditLink = styled(Link)`
  border: 1px solid rgb(var(--foreground-rgb));
  border-radius: 0.5rem;
  padding: 0.2rem;
  :hover {
    text-decoration: none;
    border: 1px solid hotpink;
  }
`;
