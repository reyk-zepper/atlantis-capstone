import { useState } from "react";
import ProductCard from "../ProductCard";

export default function Form() {
  const [items, setItems] = useState([
    { name: "Motherboard", price: 0 },
    { name: "CPU", price: 0 },
    { name: "GPU", price: 0 },
    { name: "RAM", price: 0 },
    { name: "Storage", price: 0 },
    { name: "PCU", price: 0 },
    { name: "Cooling", price: 0 },
    { name: "Case", price: 0 },
  ]);
  const [products, setProducts] = useState([]);
  const [projectName, setProjectName] = useState("");

  const handleAddItem = () => {
    setItems([...items, { name: "", price: "" }]);
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

    // Erstelle ein neues Projekt-Objekt
    const project = {
      name: event.target.projectname.value,
      items: items,
    };
    console.log(project);
    // Füge das neue Projekt zur Liste der Produkte hinzu
    setProducts([...products, project]);

    // Setze die Formular-Eingaben zurück
    setItems([
      { name: "Motherboard", price: 0 },
      { name: "CPU", price: 0 },
      { name: "GPU", price: 0 },
      { name: "RAM", price: 0 },
      { name: "Storage", price: 0 },
      { name: "PCU", price: 0 },
      { name: "Cooling", price: 0 },
      { name: "Case", price: 0 },
    ]);
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
          <div key={item.name} className="entry-form">
            <input
              name={item.name}
              type="text"
              defaultValue={item.name}
              onChange={(event) =>
                handleItemChange(index, "name", event.target.value)
              }
            />

            <input
              type="number"
              name={`${item.name}Price`}
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
        {products.map((project, index) => (
          <ProductCard
            key={index}
            product={project.product}
            price={project.price}
          />
        ))}
      </div>
    </form>
  );
}
