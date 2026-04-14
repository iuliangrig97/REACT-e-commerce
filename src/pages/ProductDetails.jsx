import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductById } from "../data/Products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  useEffect(() => {
    if (!product) {
      navigate("/");
      return;
    }
  }, [product, navigate]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:'column',
          gap:'1rem',
          marginTop: '3rem'
        }}
      >
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </div>
        <div style={{ color: "white", width:"250px", display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'2rem' }}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button style={{background:'blue', color:'white', padding:"0.3rem"}}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
