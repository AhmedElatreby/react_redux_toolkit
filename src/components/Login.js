import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "test", age: 100, email: "test@me.com" }));
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
