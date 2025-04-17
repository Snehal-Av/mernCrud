import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';

const UpdateData = () => {
  const { userId } = useParams()

  const navigate = useNavigate()
  
  const [putdata, setputData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""

  })

  const handleUpdate = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setputData({
      ...putdata, [name]: value
    })
  }

  const submitform = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8000/update/${userId}`, putdata)
      .then((res) => {
        setputData(res.data)
        navigate("/getdata")
      })
  }
  return (
    <div>
      <h1>Put</h1>

      <form onSubmit={submitform}>
        <input name="fname" type='text' onChange={handleUpdate} />
        <input name="lname" type='text' onChange={handleUpdate} />
        <input name="email" type='email' onChange={handleUpdate} />
        <input name="password" type='password' onChange={handleUpdate} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default UpdateData