import React from 'react';
import "./styles.css";
import GravityLogo from "../../Assets/GravityLogo.png";
import { Avatar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ProfileReal from "../../Assets/ProfileReal.jpeg";
import { Link } from 'react-router-dom';
import Login from '../CustomerSide/Login/LoginModal/Login';
import SignUp from '../CustomerSide/SignUps/SignUpModal/SignUp';

const Navbar = () => {
    return (
        <div>
             <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand"><img class="logo-G" src={GravityLogo} alt=""/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><MenuIcon/></span>
          </button>
          <div class="collapse navbar-collapse nav-top-links" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto navbar-heads">
            <Link className="nav-link-deco" to="/"> <li class="nav-item nav-items-nb">
                <p class="nav-link">Home</p>
              </li>  </Link>
            <Link className="nav-link-deco" to="/"> <li class="nav-item nav-items-nb">
                <p class="nav-link">Packages</p>
              </li>  </Link>
            <Link className="nav-link-deco" to="/"> <li class="nav-item nav-items-nb">
                <p class="nav-link">Blogs</p>
              </li>  </Link>
              <Link className="nav-link-deco" to="/home"> <li class="nav-item nav-items-nb">
                <p class="nav-link" >
        <li type="button" class="login-text" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <SignUp/>
        </li>
       
                </p>
              </li>  </Link>
            <Link className="nav-link-deco" to="/home"> <li class="nav-item nav-items-nb">
                <p class="nav-link" >
        <li type="button" class="login-text" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <Login/>
        </li>
       
                </p>
              </li>  </Link>
            
            <Link className="nav-link-deco" to="/"> <li class="nav-item nav-items-nb">
                <p class="nav-link">Contact</p>
              </li>  </Link>
            <Link className="nav-link-deco" to="/"> <li class="nav-item nav-items-nb">
                <p class="nav-link">About Us</p>
              </li>  </Link>
            
            </ul>
            <form class="form-inline my-2 my-lg-0 btn-form-nav">

              <button class="nav-btn-1" type="submit">Customize your package</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Navbar
