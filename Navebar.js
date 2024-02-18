import React from "react";
import { Link } from "react-router-dom";

const Navebar = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="./">
          Nani's Web
       </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
           <Link className="nav-link active"  to={'/Home'}>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active"  to={'/About'}>About</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link active" to={'/Career'}>Career</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to={'/Contact'}>Contact</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active"  to={'/login'}>Login</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link active"  to={'./signup'}>Signup</Link>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navebar;
