import { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      })
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true)
    }
  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register{' '}
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </button>
      {error && <span style ={{color:"red", marginTop:"30px"}}>Something went Wrong!!!</span>}
    </div>
  )
}
