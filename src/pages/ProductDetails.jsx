import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductById } from "../data/Products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    if (!product) {
      navigate("/");
      return;
    }
  }, [product, navigate]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantity = productInCart ? `(${productInCart.quantity})` : "";

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "3rem",
        }}
      >
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            color: "white",
            width: "250px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button
            onClick={() => addToCart(product.id)}
            style={{ background: "blue", color: "white", padding: "0.3rem" }}
          >
            Add to cart {productQuantity}
          </button>
        </div>
      </div>
    </div>
  );
}
