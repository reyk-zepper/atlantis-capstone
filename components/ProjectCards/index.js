import styled from "styled-components";
import ProductCard from "../ProductCard";

export default function ProjectCards({ projects, handleDelete, handleEdit }) {
  const hasData = projects && projects.length > 0;

  return (
    <>
      {hasData && (
        <div>
          {projects?.map((project) => {
            return (
              <ProductCard
                key={project.id}
                project={project}
                handleDelete={handleDelete}
                hasData={hasData}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
