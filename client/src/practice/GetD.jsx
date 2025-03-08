import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router'

const GetD=()=>{

    const[data,SetData]=useState([])

    const getdata=(()=>{

        axios.get("http://localhost:8000/getall")
        .then((res)=>{
       SetData(res.data)
       console.log(res.data)

        })
    })

    useEffect(()=>{

        getdata()
    },[])


return(
<>
{
    data.map((elem)=>{

        return(
            <div>
                {elem.fname}
                {elem.lname}
                {elem.email}
                {elem.password}
                <Link to={`/putd/${elem._id}`}>Update</Link>
                </div>
        )
    })
}
</>

)

}
export default GetD