import React, { useEffect, useState } from 'react'
// import '../GetUser/get.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [user,setUser]=useState({
    fname:"",
    lname:"",
    email:""
  })

  const inputUpdate=(e)=>{
    const {name,value}=e.target 
    setUser({...user,[name]:value})
    console.log(user)
  }

  const getOneData=async()=>{
   try {
    await axios.get(`http://localhost:8000/getone/${id}`)
    .then((resp)=>{
     setUser(resp.data)
    })
   } catch (error) {
      console.log(error); 
   } 
  }
  
  useEffect(()=>{
    getOneData()
  },[id])

  const updateData=async(e)=>{
    e.preventDefault()
   await axios.put(`http://localhost:8000/update/${id}`,user)
   .then((response)=>{
    setUser(response.data)
    navigate('/get')
   }).catch((error)=>{
    console.log(error);
   })
  }
  return (
    <div className='addUser'>
      <Link to='/get'>Back</Link>
      <h3>Update User</h3>
      <form className='addUserForm' onSubmit={updateData}>
        <div className='inputGroup'>
          <label htmlFor="fname">Fname</label>
          <input type="text" value={user.fname} onChange={inputUpdate} name='fname' />
        </div>
        <div className='inputGroup'>
          <label htmlFor="fname">Lname</label>
          <input type="text" value={user.lname} onChange={inputUpdate} name='lname' />
        </div>
        <div className='inputGroup'>
          <label htmlFor="fname">email</label>
          <input type="email" value={user.email} onChange={inputUpdate} name='email' />
        </div>
        <div className='inputGroup'>
          <button type='submit'>Update User</button>
        </div>
      </form>
    </div>
  )
}

export default Edit