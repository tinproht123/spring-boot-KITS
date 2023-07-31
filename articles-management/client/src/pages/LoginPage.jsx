/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../store/features/authSlice";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLogin = localStorage.getItem("isLogin");

  if (isLogin) {
    return <Navigate to="/" replace />;
  }

  const logIn = (e) => {
    e.preventDefault();
    if (email === "email@gmail.com" && password === "1234") {
      toast.success("Welcome to System!");
      navigate("/");
      dispatch(login());
    } else {
      toast.error("Invalid email or password!");
      setPassword("");
      return;
    }
  };

  return (
    <div
      className="container w-100 d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <form
        onSubmit={(e) => logIn(e)}
        className="w-100"
        style={{ maxWidth: "400px" }}
      >
        <div className="border p-4 rounded shadow">
          <h3 className="mb-4">Sign in</h3>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-end">
            <button className="btn btn-success">Đăng nhập</button>
          </div>
          <hr className="hr" />
          <div className="text-center">
            <p>
              Don't have account?{" "}
              <span className="text-primary">
                <Link to="/register">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
