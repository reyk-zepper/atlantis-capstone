import { v4 as uuidv4 } from "uuid";
import { useImmer } from "use-immer";
import useStore from "../../hooks/useStore";

export default function EditForm({ project, toggleEdit }) {
  const [projectName, setProjectName] = useImmer(project.name);
  const [items, setItems] = useImmer(project.items);
  const [editProject, deleteProject] = useStore((state) => [
    state.editProject,
    state.deleteProject,
  ]);

  function handleSubmit(event) {
    event.preventDefault();

    const editedProject = {
      name: event.target.projectname.value,
      items: items,
      id: project.id,
    };
    editProject(editedProject);
    toggleEdit();
  }
  //add a new item
  const handleAddItem = () => {
    setItems([...items, { value: "", name: "", price: "", id: uuidv4() }]);
  };

  // values change
  const handleItemChange = (index, field, value) => {
    setItems((draft) => {
      draft[index][field] = value;
    });
  };

  //change project-name
  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="projectname"
        placeholder="project name"
        value={projectName}
        onChange={handleProjectNameChange}
      />
      {items.map((item, index) => {
        return (
          <div key={item.id}>
            <input
              name={item.name}
              type="text"
              placeholder={item.name}
              value={item.value}
              onChange={(event) =>
                handleItemChange(index, "value", event.target.value)
              }
            />

            <input
              type="number"
              name={`${item.name}price`}
              value={item.price}
              onChange={(event) =>
                handleItemChange(index, "price", event.target.value)
              }
            />
          </div>
        );
      })}

      <button type="button" onClick={handleAddItem}>
        ✚
      </button>
      <button type="submit">save</button>

      <button onClick={() => deleteProject(project.id)} type="button">
        delete
      </button>
    </form>
  );
}
