import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5rem",
          padding: "1.5rem",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/checkout">Cart</Link>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/auth">Login</Link>
          <Link to="/auth">Signup</Link>
        </div>
      </div>
    </nav>
  );
}
