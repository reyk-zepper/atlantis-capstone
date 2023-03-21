import { useState } from "react";
import styled from "styled-components";

const partList = [
  { value: "", name: "motherboard", price: 0, id: 1 },
  { value: "", name: "cpu", price: 0, id: 2 },
  { value: "", name: "gpu", price: 0, id: 3 },
  { value: "", name: "ram", price: 0, id: 4 },
  { value: "", name: "storage", price: 0, id: 5 },
  { value: "", name: "pcu", price: 0, id: 6 },
  { value: "", name: "cooling", price: 0, id: 7 },
  { value: "", name: "case", price: 0, id: 8 },
];

export default function Form() {
  const [items, setItems] = useState(partList);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");

  const handleAddItem = () => {
    setItems([...items, { name: "", price: "", id: crypto.randomUUID() }]);
  };

  const handleItemChange = (index, field, value) => {
    console.log({ field, value });
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

    //neues Projekt-Objekt erstellen
    const project = {
      name: event.target.projectname.value,
      items: items,
    };

    const resetItems = partList.map((item) => {
      return { ...item, price: 0, value: "" };
    });

    //das neue Projekt zur Liste der Produkte hinzufügen
    setProjects([...projects, project]);

    // Formular-Eingaben zurücksetzen
    setItems(resetItems);
    console.log("PARTLIST", partList);
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

      <div className="product-list">
        {projects.map((project, index) => {
          let totalPrice = 0;
          return (
            <div key={index}>
              <h2>{project.name}</h2>
              <ul>
                {project.items.map((item, index) => {
                  totalPrice += Number(item.price);
                  return (
                    <li key={index}>
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
      </div>
    </form>
  );
}

const StyledProjectCard = styled.div``;
