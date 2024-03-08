import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        
        FullStack Application
    </a>
    
    <Link className='btn btn-outline-light' to='/adduser'>Add User</Link>
  </div>
</nav>
    </div>
  )
}
