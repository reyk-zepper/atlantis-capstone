import { useState, useEffect } from "react";
import ProjectCards from "../ProjectCards";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const partList = [
    { value: "", name: "motherboard", price: 0, id: uuidv4() },
    { value: "", name: "cpu", price: 0, id: uuidv4() },
    { value: "", name: "gpu", price: 0, id: uuidv4() },
    { value: "", name: "ram", price: 0, id: uuidv4() },
    { value: "", name: "storage", price: 0, id: uuidv4() },
    { value: "", name: "pcu", price: 0, id: uuidv4() },
    { value: "", name: "cooling", price: 0, id: uuidv4() },
    { value: "", name: "case", price: 0, id: uuidv4() },
  ];
  const [items, setItems] = useState(partList);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");

  const handleAddItem = () => {
    setItems([...items, { value: "", name: "", price: "", id: uuidv4() }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
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
    setProjects([...projects, project]);

    // Formular-Eingaben zurücksetzen
    setItems(resetItems);

    setProjectName("");
    event.target.reset();
  };

  function handleDelete(id) {
    const updatedList = projects.filter((project) => project.id !== id);
    setProjects(updatedList);
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
      <ProjectCards handleDelete={handleDelete} projects={projects} />
    </>
  );
}
