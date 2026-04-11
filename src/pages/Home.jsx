import { getProducts } from "../data/Products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = getProducts();
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Welcome!</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ marginBottom: "2rem" }}>Products</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "3rem",
          }}
        >
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

