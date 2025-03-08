import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetMethod = () => {
    const [data,setData]=useState([])

    const getdata=async()=>{
       await axios.get(`http://localhost:8000/getall`)
        .then((res)=>{
            setData(res.data)
            console.log(res.data)
        })

    }

    const handleDelete=(dId)=>{
        axios.delete(`http://localhost:8000/delete/${dId}`)
        .then(()=>{
            getdata();
        })

    }

    useEffect(()=>{
        getdata();
    },[])
  return (
    <div>GetMethod{
        data.map((elem)=>{
            return(
                <div>
                    {elem.Id}
                    {elem.fname}
                    <button onClick={(()=>handleDelete(elem._id))}>delete</button>
                </div>
            )

        })
    }
</div>
    
  )
  
}


export default GetMethod