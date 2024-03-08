import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let navigate= useNavigate();
    const {id} = useParams();
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    })
    const{name,username,email} = user;
    const onInputChnage=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        loadUser();
    },[])
    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user);
        navigate("/")
    }
    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded  p-2 mt-2 shadow'>
        <h2 className='text-center m-4'> Edit User</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='mb-3'>
            <label htmlFor="Name" className='form-label'>Name</label>
            <input type="text" onChange={(e)=>onInputChnage(e)} name='name' value={name} className="form-control" placeholder='Enter your name' id="" />
        </div>
        <div className='mb-3'>
            <label htmlFor="Name" className='form-label'>Username</label>
            <input type="text" onChange={(e)=>onInputChnage(e)} name='username' value={username} className="form-control" placeholder='Enter your username' id="" />
        </div>
        <div className='mb-3'>
            <label htmlFor="Name" className='form-label'>Email</label>
            <input type="text" onChange={(e)=>onInputChnage(e)} name='email' value={email} className="form-control" placeholder='Enter your email' id="" />
        </div>
        <button type='submit' className='btn btn-outline-primary'>Submit</button>
        <Link to='/' className='btn btn-outline-danger mx-2'>Cancel</Link>

        </form>
        </div>
      </div>
    </div>
  )
}
