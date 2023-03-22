import { useState } from "react";
import styled from "styled-components";
import EditForm from "../EditForm";

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${({ hasData }) => (hasData ? "1px solid black" : "none")};
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

export default function ProductCard({ projects, handleDelete, hasData }) {
  const [edit, setEdit] = useState(false);

  function toggleEdit() {
    setEdit(!edit);
  }

  return (
    <div>
      {projects?.map((project) => {
        let totalPrice = 0;
        console.log(project);
        return edit ? (
          <EditForm key={project.id} project={project} />
        ) : (
          <StyledProjectCard hasData={hasData} key={project.id}>
            <h2>Project: {project.name}</h2>
            <ul>
              {project.items.map((item) => {
                totalPrice += Number(item.price);
                return (
                  <li key={item.id}>
                    <p>
                      {item.value === ""
                        ? item.name.toUpperCase()
                        : item.value.toUpperCase()}
                      : {item.price}$
                    </p>
                  </li>
                );
              })}
            </ul>
            <p>Total: {totalPrice}$</p>
            <button type="button" onClick={toggleEdit}>
              edit
            </button>
            {edit && (
              <button onClick={() => handleDelete(project.id)} type="button">
                delete
              </button>
            )}
          </StyledProjectCard>
        );
      })}
    </div>
  );
}
