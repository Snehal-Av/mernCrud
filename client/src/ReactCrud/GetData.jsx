import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const GetData = () => {
    const [getData,setgetData]=useState([])


    const getDatas=async()=>{
        await axios.get("http://localhost:8000/getall")
        .then((res)=>{
            setgetData(res.data)
            console.log(res.data);
            
        })
    }

    const deleteData=(Did)=>{
      axios.delete(`http://localhost:8000/delete/${Did}`)
      .then(()=>{
        getDatas()
      })
    }


    useEffect(()=>{
        getDatas()
    },[])

  return (
    <div>
        <h1>GetData</h1>
        {
          getData.map((item)=>{
            return(
                <>
                <p>{item.fname}</p>
                <p>{item.lname}</p>
                <p>{item.email}</p>
                <p>{item.password}</p>
                <Link to={`/update/${item._id}`}>Update</Link>
                
                <button onClick={()=>deleteData(item._id)}>delete</button>
                </>
            )
          })  
        }
    </div>
  )
}

export default GetData