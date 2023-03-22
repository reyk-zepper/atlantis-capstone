import styled from "styled-components";

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

export default function ProjectCard({ projects }) {
  const hasData = projects && projects.length > 0;

  return (
    <>
      {hasData && (
        <StyledProjectCard hasData={hasData}>
          {projects.map((project, index) => {
            let totalPrice = 0;
            return (
              <div key={index}>
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
              </div>
            );
          })}
        </StyledProjectCard>
      )}
    </>
  );
}
