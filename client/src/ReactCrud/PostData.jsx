import axios from 'axios'
import React, { useState } from 'react'

const PostData = () => {
    const [userData,setUserData]=useState({
        fname:"",
        lname:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value

        setUserData({
            ...userData,[name]:value
        })
     console.log(userData)
    }

    const createData=async(e)=>{
        e.preventDefault()
      await axios.post("http://localhost:8000/create",userData)
       .then((result)=>{
         setUserData(result.data)
      
         
       })
       console.log(userData);
       
    }

  return (
    <div>
        <h1>PostData</h1>
        <form onSubmit={createData}>
        <input type='text' name='fname' onChange={handleChange}/>
        <input type='text' name='lname'  onChange={handleChange}/>
        <input type='email' name='email' onChange={handleChange}/>
        <input type='password' name='password' onChange={handleChange}/>
        <button  type='submit'>postData</button>
        </form>
    </div>
  )
}

export default PostData