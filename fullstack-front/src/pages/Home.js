import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { Button } from 'bootstrap';
export default function Home() {
  const[users,setUsers] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    loadusers();

  },[]);
  const loadusers =async () =>{
    const result = await axios.get("http://localhost:8080/user")
    setUsers(result.data);
  }
  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`) 
    loadusers();
  }
  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
    users.map((user,index)=>(
      <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/viewuser/${user.id}`} className='btn btn-primary mx-2'>View </Link>
        <Link className='btn btn-ouline-primary border mx-2' to={`/editUser/${user.id}`}>Edit</Link>
        <button className='btn btn-danger mx-2'
        onClick={()=>deleteUser(user.id)}
        >Delete</button>

      </td>
    </tr>
    ))
    }
   
    
  </tbody>
</table>
      </div>
    </div>
  )
}
