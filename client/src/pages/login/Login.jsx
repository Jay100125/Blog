import "./login.css"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="Login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="email" className="loginInput" placeholder="Enter Your Email" />
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter Your password" />
            <button className="loginButton">Login</button>
        </form>
    <button className="loginRegisterButton">
      <Link to="/register" className="link">REGISTER</Link>
    </button>
    </div>
  )
}
