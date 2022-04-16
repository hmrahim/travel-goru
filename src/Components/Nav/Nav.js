import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {signOut} from "firebase/auth"

const Nav = () => {
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);
  const logout = ()=> {
    signOut(auth)
    navigate("/login")


  }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Booking">Booking</Link>
        </li>
        {
          user ? 
        
        <li className="nav-item ms-3">
          <a onClick={logout} className='btn btn-warning'  aria-current="page" >Logout</a>
        </li>
        :
        <li className="nav-item ms-3">
          <Link className='btn btn-warning'  aria-current="page" to="/login">Login</Link>
        </li>
        }
     
       
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Nav;