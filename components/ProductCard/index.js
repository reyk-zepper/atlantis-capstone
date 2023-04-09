import Link from "next/link";
import styled, { css } from "styled-components";
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
import html2pdf from "html2pdf.js";
import { useEffect, useState } from "react";

export default function ProductCard({ project, editState }) {
  const isDarkMode = useDarkMode();
  const router = useRouter();
  const [moveToActive] = useStore((state) => [state.moveToActive]);
  const labelColor = isDarkMode ? "white" : "black";
  const [isPdfActive, setIsPdfActive] = useState(false);

  useEffect(() => {
    setIsPdfActive(false);
  }, []);

  if (!project) {
    return <h2>something went wrong</h2>;
  }

  const handleMoveToActive = (id) => {
    router.push("/active");
    moveToActive(id);
  };

  const handleGeneratePDF = () => {
    const element = document.getElementById("detailsPDF");
    const options = {
      margin: 0.5,
      filename: `${project.id}.pdf`,
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 2,
      },
      jsPDF: {
        unit: "cm",
        format: "a4",
        orientation: "portrait",
      },
    };
    setIsPdfActive(true);
    router.push("/done");
    html2pdf().set(options).from(element).outputPdf("dataurlnewwindow");
  };

  return (
    <StyledProjectCard key={project.id}>
      <PdfWrapper isPdfActive={isPdfActive} id={"detailsPDF"}>
        <h2>Project: {project.name}</h2>
        <p>created: {project.creationDate}</p>
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
      </PdfWrapper>
      {editState === "active" && <Link href={`/edit/${project.id}`}>edit</Link>}
      {editState === "done" && (
        <>
          <button type="button" onClick={() => handleMoveToActive(project.id)}>
            move to active
          </button>
          <button type="button" onClick={handleGeneratePDF}>
            to PDF
          </button>
        </>
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

const PdfWrapper = styled.div`
  ${(props) =>
    props.isPdfActive
      ? css`
          color: black;
        `
      : css`
          color: white;
        `}
`;
