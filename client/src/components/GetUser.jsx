import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



const GetUser = () => {
   
    const [users, setUsers] = useState([])

    const getData = async () => {
        const response = await axios.get("http://localhost:8000/getall");
        setUsers(response.data)
        console.log(response.data);
        
    }
    const deleteData=(dId)=>{
        try {
          axios.delete(`http://localhost:8000/delete/${dId}`)
         .then(()=>{
         getData();
         })
        } catch (error) {
           console.log(error); 
        } 
       }
    
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='userTable'>
            <Link to='/add' className='addButton'>Add User</Link>
            <table>
                <thead border={1} cellPadding={10} cellSpacing={0}>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{index+1}</td>
                                    <td>{user.fname} {user.lname}</td>
                                    <td>{user.email}</td>
                                    <td className='actionButtons'>
                                    <button onClick={()=>deleteData(user._id)}>delete</button>
                                        <Link to={`/edit/`+user._id}>Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default GetUser