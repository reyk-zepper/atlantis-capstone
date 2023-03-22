import { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectCard from "../ProjectCard";

export default function Form() {
  const [items, setItems] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    const partList = [
      {
        value: "",
        name: "motherboard",
        price: 0,
        id: crypto.randomUUID(),
      },
      { value: "", name: "cpu", price: 0, id: crypto.randomUUID() },
      { value: "", name: "gpu", price: 0, id: crypto.randomUUID() },
      { value: "", name: "ram", price: 0, id: crypto.randomUUID() },
      { value: "", name: "storage", price: 0, id: crypto.randomUUID() },
      { value: "", name: "pcu", price: 0, id: crypto.randomUUID() },
      { value: "", name: "cooling", price: 0, id: crypto.randomUUID() },
      { value: "", name: "case", price: 0, id: crypto.randomUUID() },
    ];
    setItems(partList);
  }, []);

  const handleAddItem = () => {
    setItems([
      ...items,
      { value: "", name: "", price: "", id: crypto.randomUUID() },
    ]);
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
    // const newProject = { ...data, id: crypto.randomUUID() };

    //neues Projekt-Objekt erstellen
    const project = {
      name: event.target.projectname.value,
      items: items,
    };

    const resetItems = items.map((item) => {
      return { ...item, price: 0, value: "" };
    });

    //das neue Projekt zur Liste der Produkte hinzufügen
    setProjects([...projects, project]);

    // Formular-Eingaben zurücksetzen
    setItems(resetItems);

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
              // defaultValue={item.name.toUpperCase()}
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
        Zeile hinzufügen
      </button>
      <button type="submit">Formular absenden</button>
      <ProjectCard projects={projects} />
    </form>
  );
}
