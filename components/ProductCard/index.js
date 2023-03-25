import { useImmer } from "use-immer";
import styled from "styled-components";
import EditForm from "../EditForm";
import useStore from "../../hooks/useStore";

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

export default function ProductCard({ project, hasData }) {
  const [edit, setEdit] = useImmer(false);
  const [deleteProject] = useStore((state) => [state.deleteProject]);

  let totalPrice = 0;

  function toggleEdit() {
    setEdit(!edit);
  }

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
      {!edit && (
        <button onClick={() => deleteProject(project.id)} type="button">
          delete
        </button>
      )}
    </StyledProjectCard>
  );
}
