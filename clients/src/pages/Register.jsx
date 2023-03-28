import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value.value}))
  }
  
  const handleSubmit = async e =>{
    e.preventDefault()
    const res = await axios.post("/auth/register")
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" name='username' placeholder='username' onChange={handleChange}/>
        <input required type="email" name='email' placeholder='email' onChange={handleChange}/>
        <input required type="password" name='password' placeholder='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        <span>Do you have an account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register