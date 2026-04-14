import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isAuth, setIsAuth] = useState("login");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { signUp, login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);

    let result;
    if (isAuth === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  }

  return (
    <div
      style={{
        color: "white",
        marginTop: "3rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem",
          border: "3px solid white",
        }}
      >
        <h1>{isAuth === "signup" ? "Sign Up" : "Login"}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div style={{ color: "red", backgroundColor: "white" }}>
              {error}
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label style={{ marginBottom: "1rem" }} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              style={{ padding: "0.3rem" }}
              id="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "1rem" }} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              style={{ padding: "0.3rem" }}
              id="password"
              {...register("password", {
                required: "Password needed",
                minLength: { value: 3, message: "Min 3 chars" },
                maxLength: { value: 10, message: "Max 10 chars" },
              })}
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>
          <button
            type="submit"
            style={{
              padding: "0.5rem",
              marginTop: "1rem",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            {isAuth === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>

        <div>
          {isAuth === "signup" ? (
            <p>
              Already have an account?
              <button
                style={{
                  color: "blue",
                  marginLeft: "0.3rem",
                  cursor: "pointer",
                }}
                onClick={() => setIsAuth("login")}
              >
                Login
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?
              <button
                style={{
                  color: "red",
                  marginLeft: "0.3rem",
                  cursor: "pointer",
                }}
                onClick={() => setIsAuth("signup")}
              >
                Sign up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
