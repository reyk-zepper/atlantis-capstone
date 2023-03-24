import ProjectCards from "../ProjectCards";
import { v4 as uuidv4 } from "uuid";
import { useImmer } from "use-immer";
import { partList } from "../../lib/initialValues";
import useStore from "../../hooks/useStore";

export default function Form() {
  const [items, setItems] = useImmer(partList);
  const [projects, setProjects, addToProject] = useStore((state) => [
    state.projects,
    state.setProjects,
    state.addToProject,
  ]);

  const [projectName, setProjectName] = useImmer("");

  const handleAddItem = () => {
    setItems([...items, { value: "", name: "", price: "", id: uuidv4() }]);
  };

  const handleItemChange = (index, field, value) => {
    setItems((draft) => {
      draft[index][field] = value;
    });
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //neues Projekt-Objekt erstellen
    const project = {
      name: event.target.projectname.value,
      items: items,
      id: uuidv4(),
    };

    const resetItems = partList.map((item) => {
      return { ...item, price: 0, value: "" };
    });

    //das neue Projekt zur Liste der Produkte hinzufügen
    addToProject(project);

    // Formular-Eingaben zurücksetzen
    setItems(resetItems);

    setProjectName("");
    event.target.reset();
  };

  function handleEdit(id, payload) {
    const tempProjects = projects.map((project) => {
      if (project.id === id) {
        return payload;
      } else {
        return project;
      }
    });
    setProjects(tempProjects);
  }

  return (
    <>
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
      </form>
      <ProjectCards handleEdit={handleEdit} />
    </>
  );
}
