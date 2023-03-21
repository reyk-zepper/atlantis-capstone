import { useState } from "react";
import ProductCard from "../ProductCard";
import styled from "styled-components";

const partList = [
  { name: "motherboard", price: 0, id: 1 },
  { name: "cpu", price: 0, id: 2 },
  { name: "gpu", price: 0, id: 3 },
  { name: "ram", price: 0, id: 4 },
  { name: "storage", price: 0, id: 5 },
  { name: "pcu", price: 0, id: 6 },
  { name: "cooling", price: 0, id: 7 },
  { name: "case", price: 0, id: 8 },
];

export default function Form() {
  const [items, setItems] = useState(partList);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");

  const handleAddItem = () => {
    setItems([...items, { name: "", price: "", id: crypto.randomUUID() }]);
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

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newProject = { ...data, id: crypto.randomUUID() };
    console.log(newProject);
    //neues Projekt-Objekt erstellen
    const project = {
      name: event.target.projectname.value,
      items: items,
    };
    console.log("project", project);
    console.log("project.items", project);

    //das neue Projekt zur Liste der Produkte hinzufügen
    setProjects([...projects, project]);

    // Setze die Formular-Eingaben zurück
    setItems(partList);
    setProjectName("");
    event.target.reset();
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
          <div key={item.id} className="entry-form">
            <input
              name={item.name}
              type="text"
              defaultValue={item.name.toUpperCase()}
              onChange={(event) =>
                handleItemChange(index, "name", event.target.value)
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
        Zeile hinzufügen
      </button>
      <button type="submit">Formular absenden</button>

      <div className="product-list">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <h2>{project.name}</h2>
              {project.items.map((item, index) => {
                return (
                  <li key={index}>
                    <p>
                      {item.name.toUpperCase()}: {item.price}
                    </p>
                  </li>
                );
              })}
            </div>
          );
        })}
      </div>
    </form>
  );
}

const StyledProjectCard = styled.div``;
