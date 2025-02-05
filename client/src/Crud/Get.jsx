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
    useEffect(() => {
        getData()

    }, [])

    return (
        <div>{
            data.map((elem) => {
                return (
                    <div>
                        {elem.fname}

                        {elem.lname}
                        <Link to={`/putdata/${elem._id}`}>Update</Link>
                    </div>
                )


            })




        }</div>

    )
}

export default Get