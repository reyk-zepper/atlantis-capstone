import styled from "styled-components";

const ProductCardWrapper = styled.div`
  display: flex;

  align-items: center;
  background-color: #f1f1f1;
  h2 {
    margin-right: 20px;
  }
`;

// export default function ProductCard({ product, price }) {
//   return (
//     <ProductCardWrapper>
//       <h2>{product}</h2>
//       <p>{price}</p>
//     </ProductCardWrapper>
//   );
// }
export default function ProductCard({ product, index }) {
  const totalPrice = items.reduce((acc, item) => acc + parseInt(item.price), 0);

  return (
    <div className="product-card">
      <h2>{projectname}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}: {item.price}
          </li>
        ))}
      </ul>
      <p>Total price: {totalPrice}</p>
    </div>
  );
}
