import styled from "styled-components";

const ProductCardWrapper = styled.div`
  display: flex;

  align-items: center;
  background-color: #f1f1f1;
  h2 {
    margin-right: 20px;
  }
`;

export default function ProductCard({ product, price }) {
  return (
    <ProductCardWrapper>
      <h2>{product}</h2>
      <p>{price}</p>
    </ProductCardWrapper>
  );
}
