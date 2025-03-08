import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"


const PostD=(()=>{
  const navigate=useNavigate()
const [post, SetPost]=useState({
  fname:"",
  email:"",
  password:" "


})
const handleChange=((e)=>{
const name = e.target.name
const value=e.target.value
   SetPost({
    ...post,[name]:value
   })

   console.log(SetPost)

   
})

const FormSubmit=async(e)=>{
e.preventDeafult()
 await axios.post("http://localhost:8000/create",post)
  .then((res)=>{
    SetPost(res.data)
    console.log(res.data)
    navigate("/Getd")
  })
}




return(
  <div>
    {FormSubmit}
    <form onSubmit={FormSubmit}>
    <input type="text" name="fname" onChange={handleChange}/>
    <input type="text" name="email" onChange={handleChange}/>
    <input type="text" name="password" onChange={handleChange}/>
    <button type="submit">Submit</button>

    </form>

  </div>
)
})
export default PostD