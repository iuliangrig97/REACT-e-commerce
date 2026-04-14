import { Link } from "react-router-dom";
import {useAuth} from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
          padding: "1.5rem",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/checkout">Cart</Link>
        </div>
        {!user ? (
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/auth">Login</Link>
            <Link to="/auth">Signup</Link>
          </div>
        ) : (
          <div
            style={{
              color: "white",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>Hello, {user.email}</span>
            <button onClick={logout} style={{ padding: "0.3rem" }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
