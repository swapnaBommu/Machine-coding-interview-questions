import { useState } from "react";
import "./login.css";
import {useAuthcontext} from "../context/AuthContextwithoutapi";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuthcontext();
  return (
    <div className="login-container">
      <form className="login-card" onSubmit={(e)=>{
        e.preventDefault();
        login(email, password);
      }}>
        <h2>Welcome Back 👋</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;