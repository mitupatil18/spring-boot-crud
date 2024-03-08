import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
    let navigate= useNavigate();
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    })
    const{name,username,email} = user;
    const onInputChnage=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/")
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded  p-2 mt-2 shadow'>
        <h2 className='text-center m-4'> Register User</h2>
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
