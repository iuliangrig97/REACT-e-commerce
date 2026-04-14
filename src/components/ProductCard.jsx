import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantity = productInCart ? `(${productInCart.quantity})` : "";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "250px", height: "250px", objectFit: "cover" }}
      />
      <div style={{ margin: "1rem 0" }}>
        <h3 style={{ marginBottom: "0.5rem" }}>{product.name}</h3>
        <p>${product.price}</p>
        <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
          <Link
            to={`/products/${product.id}`}
            style={{ padding: "1rem", backgroundColor: "gray" }}
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product.id)}
            style={{
              padding: "1rem",
              backgroundColor: "blue",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add to cart {productQuantity}
          </button>
        </div>
      </div>
    </div>
  );
}
