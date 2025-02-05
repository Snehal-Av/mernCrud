import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import './add.css'
import axios from 'axios';


const Add = () => {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""
  })
  const inputHandler = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    console.log(user)
  }

  const submitForm =async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8000/create",user)
    .then((response)=>{
      navigate('/get')
    }).catch((error)=>{
      console.log(error.message);
    })
  }

  return (
    <div className='addUser'>
      <Link to='/'>Back</Link>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor="fname">Fname</label>
          <input type="text" onChange={inputHandler} name='fname' />
        </div>
        <div className='inputGroup'>
          <label htmlFor="fname">Lname</label>
          <input type="text" onChange={inputHandler} name='lname' />
        </div>
        <div className='inputGroup'>
          <label htmlFor="fname">email</label>
          <input type="text" onChange={inputHandler} name='email' />
        </div>
        <div className='inputGroup'>
          <label htmlFor="fname">Password</label>
          <input type="text" onChange={inputHandler} name='password' />
        </div>
        <div className='inputGroup'>
          <button type='submit'>Add User</button>
        </div>
      </form>
    </div>
  )
}

export default Add