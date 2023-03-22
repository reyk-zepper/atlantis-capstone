import styled from "styled-components";
import ProductCard from "../ProductCard";

export default function ProjectCards({ projects, handleDelete }) {
  const hasData = projects && projects.length > 0;

  return (
    <>
      {hasData && (
        <ProductCard
          hasData={hasData}
          handleDelete={handleDelete}
          projects={projects}
        />
      )}
    </>
  );
}
