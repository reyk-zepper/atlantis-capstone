import { v4 as uuidv4 } from "uuid";

export default function EditForm({ project, handleEdit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const editProject = {
      name: project.name,
      items: project.items,
      id: uuidv4(),
    };

    handleEdit(project.id, editProject);
  }

  return (
    <form onSubmit={handleSubmit}>
      {project.items.map((item) => {
        return (
          <div key={item.id}>
            <input
              name={item.name}
              type="text"
              placeholder={item.name}
              defaultValue={item.value}
            />

            <input
              type="number"
              name={`${item.name}price`}
              defaultValue={item.price}
            />
          </div>
        );
      })}
      <button type="submit">submit changes</button>
    </form>
  );
}
