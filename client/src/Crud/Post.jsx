import axios from 'axios';
import React, { useState } from 'react'

const Post = () => {
  const [postData, setPostData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""

  })

  const handleChange = (e) => {
    const  name  = e.target.name;
    const  value  = e.target.value
    setPostData({
      ...postData, [name]: value 
    })
    console.log(postData);
  }

  const formSubmit=(e)=>{
    e.preventDefault()
   axios.post('http://localhost:8000/create',postData)
   .then((res)=>{
    setPostData(res.data )
    console.log(res.data);
    
   })
  }

  return (
    <div>
      <h1>Post</h1>
      <form onSubmit={formSubmit}>
      <input name="fname" type='text' onChange={handleChange}/>
      <input name="lname" type='text' onChange={handleChange}/>
      <input name="email" type='email' onChange={handleChange}/>
      <input name="password" type='password' onChange={handleChange}/>
      <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Post