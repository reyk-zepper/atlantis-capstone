import { useState } from "react";
import ProductCard from "../ProductCard";

export default function Form() {
  const [items, setItems] = useState([
    {
      motherboard: { name: "Motherboard", price: 0 },
      cpu: { name: "CPU", price: 0 },
      gpu: { name: "GPU", price: 0 },
      ram: { name: "RAM", price: 0 },
      storage: { name: "Storage", price: 0 },
      pcu: { name: "PCU", price: 0 },
      cooling: { name: "Cooling", price: 0 },
      case: { name: "Case", price: 0 },
    },
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
    setItems([{ product: "", price: "" }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="entry-form">
        <input
          type="text"
          value={items.motherboard.name}
          onChange={(event) =>
            handleItemChange(index, "product", event.target.value)
          }
        />

        <input
          type="number"
          value={0}
          onChange={(event) =>
            handleItemChange(index, "price", event.target.value)
          }
        />
      </div>

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
