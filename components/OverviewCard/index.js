import styled from "styled-components";
import Link from "next/link";
import { formatToEUR } from "@/helper/formatToEUR";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { chartOptions } from "@/helper/chartOptions";
import { createChartData } from "@/helper/createChartData";
import useDarkMode from "@/hooks/useDarkMode";
import { sumTotalPrice } from "@/helper/sumTotalPrice";

export default function OverviewCard({ project }) {
  const isDarkMode = useDarkMode();

  const labelColor = isDarkMode ? "white" : "black";
  return (
    <StyledProjectCard key={project.id}>
      <h2>Project: {project.name}</h2>
      <div>
        <Pie
          data={createChartData(project)}
          options={chartOptions(true, labelColor)}
        />
      </div>

      <p>Total: {formatToEUR(sumTotalPrice(project))}</p>
      <Link href={`/details/${project.id}`}>details</Link>
    </StyledProjectCard>
  );
}

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(var(--foreground-rgb));
  box-shadow: 0px 5px 10px 5px rgba(255, 214, 243, 0.7);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;
