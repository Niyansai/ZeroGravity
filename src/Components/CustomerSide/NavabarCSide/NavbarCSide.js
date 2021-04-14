import React from 'react';
import "./styles.css";
import GravityLogo from "../../../Assets/GravityLogo.png";
import { Avatar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ProfileReal from "../../../Assets/ProfileReal.jpeg";
import { Link, useHistory } from 'react-router-dom';


const NavbarCSide = () => {


  const history = useHistory();


  return (
    <div>
      <nav class="navbar navbar-expand-lg nav-before-log-top d-flex">
        <Link class="navbar-brand"><img class="logo-G" src={GravityLogo} alt="" /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><MenuIcon /></span>
        </button>
        <div class="collapse navbar-collapse nav-top-links nav-text-links" id="navbarNavDropdown">
          <ul class="navbar-nav mr-auto navbar-heads">
            <Link className="nav-link-deco"> <li class="nav-item nav-items-nb">
              <p class="nav-link">Home</p>
            </li>  </Link>
            <Link className="nav-link-deco"> <li class="nav-item nav-items-nb">
              <p class="nav-link">Packages</p>
            </li>  </Link>
            <Link className="nav-link-deco"> <li class="nav-item nav-items-nb">
              <p class="nav-link">Blogs</p>
            </li>  </Link>

            <Link className="nav-link-deco"> <li class="nav-item nav-items-nb">
              <p class="nav-link">Contact</p>
            </li>  </Link>
            <Link className="nav-link-deco"> <li class="nav-item nav-items-nb">
              <p class="nav-link">About Us</p>
            </li>  </Link>

            <Link className="nav-link-deco"> <li class="nav-item nav-items-nb">
              <p class="nav-link">My Trips</p>
            </li>  </Link>
            <Link className="nav-link-deco"> <li class="nav-item nav-items-nb d-flex">
              <Avatar src={ProfileReal} />
              <p style={{ marginLeft: "10px" }} >{sessionStorage.getItem("user")} <br /><span><small style={{ cursor: "pointer", color: "gray" }}>Profile</small></span></p>
            </li>  </Link>

          </ul>
          <div class="form-inline my-2 my-lg-0 btn-form-nav">

            <button class="nav-btn-1" type="submit">Customize your package</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarCSide;
