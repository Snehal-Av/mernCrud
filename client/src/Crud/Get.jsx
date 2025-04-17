import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Get = () => {
    const [data, setData] = useState([])

    const getData = () => {
        axios.get("http://localhost:8000/getall")
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })

    }

    const deleteData=(dId)=>{
        axios.delete(`http://localhost:8000/delete/${dId}`)
        .then(()=>{
            getData();
        })
    }

    useEffect(() => {
        getData();

    }, [])

    return (
        <div>
            <Link to='/postdata'><button>Add User</button></Link>
            {
            data.map((elem) => {
                return (
                    <div>
                        {elem.fname}

                        {elem.lname}
                        <button onClick={()=>deleteData(elem._id)}>delete</button>
                        <Link to={`/putdata/${elem._id}`}>Update</Link>
                    </div>
                )


            })




        }</div>

    )
}

export default Get