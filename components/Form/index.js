import { useState } from "react";

export default function Form() {
  const [items, setItems] = useState([{ product: "", price: "" }]);

  const handleAddItem = () => {
    setItems([...items, { product: "", price: "" }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(items);
  };

  return (
    <form onSubmit={handleSubmit}>
      {items.map((item, index) => (
        <div key={index} className="entry-form">
          <input
            // key={item.product}
            type="text"
            placeholder="Product"
            value={item.product}
            onChange={(event) =>
              handleItemChange(index, "product", event.target.value)
            }
          />

          <input
            // key={item.price}
            type="number"
            placeholder="Price"
            value={item.price}
            onChange={(event) =>
              handleItemChange(index, "price", event.target.value)
            }
          />
        </div>
      ))}
      <button type="button" onClick={handleAddItem}>
        Zeile hinzufügen
      </button>
      <button type="submit">Formular absenden</button>
    </form>
  );
}
