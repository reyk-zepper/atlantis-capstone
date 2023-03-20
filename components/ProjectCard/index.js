export default function ProductCard({ product, price }) {
  return (
    <div className="product-card">
      <h3>{product}</h3>
      <p>{price}</p>
    </div>
  );
}
