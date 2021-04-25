import React, { useEffect } from 'react';
import "./styles.css";
import GravityLogo from "../../../Assets/GravityLogo.png";
import { Avatar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ProfileReal from "../../../Assets/ProfileReal.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const NavBeforeLog = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease'
    });
      }, [])
    return (
        <div className="container">
             <nav class="navbar navbar-expand-lg">
  <a data-aos="fade-right" class="navbar-brand" href="#"><img class="logo-G nav-logo" src={GravityLogo} alt=""/></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"><MenuIcon/></span>
  </button>
  <div class="collapse navbar-collapse nav-top-links" id="navbarNavDropdown">
    <ul data-aos="fade-down" class="navbar-nav mr-auto navbar-heads">
      <li class="nav-item nav-items-nb">
        <p class="nav-link p-nav-links" href="#">Home</p>
      </li>
      <li class="nav-item nav-items-nb">
        <p class="nav-link p-nav-links" href="#">Packages</p>
      </li>
      <li class="nav-item nav-items-nb">
        <p class="nav-link p-nav-links" href="#">Blogs</p>
      </li>
      <li class="nav-item nav-items-nb">
        <p class="nav-link p-nav-links" href="#">SignUp</p>
      </li>
      <li class="nav-item nav-items-nb">
        <p class="nav-link p-nav-links" href="#">Login</p>
      </li>
      <li class="nav-item nav-items-nb">
        <p class="nav-link p-nav-links" href="#">Contact</p>
      </li>
     
      <li class="nav-item nav-items-nb">
        <p class="nav-link p-nav-links" href="#">About Us</p>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0 btn-form-nav">

      <button data-aos="fade-left" class="nav-btn-1 nav-btn-nbl" type="submit">Customize your package</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default NavBeforeLog;
