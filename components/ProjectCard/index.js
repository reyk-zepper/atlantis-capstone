export default function ProjectCard({ projects }) {
  return (
    <>
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
    </>
  );
}
