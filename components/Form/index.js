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
    setProducts(items);
    setItems([...items, { product: "", price: "" }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="projectname" placeholder="project name" />
      {items.map((item) => {
        return (
          <div key={item.name} className="entry-form">
            <input name={item.name} type="text" defaultValue={item.name} />

            <input
              type="number"
              name={`${item.name}Price`}
              value={0}
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
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product.product}
            price={product.price}
          />
        ))}
      </div>
    </form>
  );
}
