import axios from "axios";
import { useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router";

const Putd=(()=>{
    const {userId}=useParams()
  const navigate=useNavigate()
    const [put,setPut]=useState({

        fname:"",
        email:"",
        password:" "
    })
    const handleChange=((e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setPut({
            ... put,[name]:value
        })
    })
    const submitform =async(e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:8000/update/${userId}`,put) 
        .then((res)=>{
            setPut(res.data)
            navigate("/GetD")
        })
    }
    return(
        <div>
<div>
      <h1>Put</h1>
      
      <form  onSubmit={submitform}>
      <input name="fname" type='text' onChange={handleChange}/>
      <input name="lname" type='text' onChange={handleChange}/>
      <input name="email" type='email' onChange={handleChange}/>
      <input name="password" type='password' onChange={handleChange} />
      <button type='submit'>submit</button>
      </form>
    </div>
        </div>
    )
})
export default Putd