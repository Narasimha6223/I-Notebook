import React from 'react'
import {Link , useLocation} from "react-router-dom"

export default function Navbar() {
  let loc = useLocation()

  return (
    <nav className="navbar navbar-expand-lg  bg-dark text-light" >
  <div className="container-fluid">
    <Link className="navbar-brand  text-light" to="/">INotebook</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className={`nav-link  text-light ${loc.pathname!=='/'?"active-mine":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  text-light ${loc.pathname!=='/about'?"active-mine":""}`} to="/about">About</Link>
        </li>
       </ul>
      
    </div>
  </div>
</nav>
  )
}
