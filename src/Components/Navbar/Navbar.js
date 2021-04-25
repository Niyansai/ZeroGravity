import React, { useEffect } from 'react';
import "./styles.css";
import GravityLogo from "../../Assets/GravityLogo.png";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Login from '../CustomerSide/Login/LoginModal/Login';
import SignUp from '../CustomerSide/SignUps/SignUpModal/SignUp';
  import AOS from 'aos';
  import 'aos/dist/aos.css'; 

const Navbar = () => {

  useEffect(() => {
AOS.init({
  duration: 2000,
  easing: 'ease'
});
  }, [])

  return (
    <div>
      <nav class="navbar navbar-expand-lg nav-before-log-top d-flex">
        <a data-aos="fade-right" class="navbar-brand"><img class="logo-G" src={GravityLogo} alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><MenuIcon /></span>
        </button>
        <div class="collapse navbar-collapse nav-top-links nav-text-links" id="navbarNavDropdown">
          <ul data-aos="fade-down" class="navbar-nav mr-auto navbar-heads">
            <Link className="nav-link-deco" to="/home"> <li class="nav-item nav-items-nb">
              <p class="nav-link">Home</p>
            </li>  </Link>
            <Link className="nav-link-deco" to="/packagesearch"> <li class="nav-item nav-items-nb">
              <p class="nav-link">Packages</p>
            </li>  </Link>
            <Link className="nav-link-deco" to="/"> <li class="nav-item nav-items-nb">
              <p class="nav-link">Blogs</p>
            </li>  </Link>
            <Link className="nav-link-deco" to="/home"> <li class="nav-item nav-items-nb">
              <p class="nav-link" >
                <li type="button" class="login-text" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <SignUp />
                </li>

              </p>
            </li>  </Link>
            <Link className="nav-link-deco" to="/home">
              <li class="nav-item nav-items-nb">
                <p class="nav-link" >
                  <li type="button" class="login-text" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <Login />
                  </li>
                </p>
              </li>  </Link>

            <Link className="nav-link-deco" to="/contact"> <li class="nav-item nav-items-nb">
              <p class="nav-link">Contact</p>
            </li>  </Link>
            <Link className="nav-link-deco" to="/about"> <li class="nav-item nav-items-nb">
              <p class="nav-link">About Us</p>
            </li>  </Link>

          </ul>
          <div data-aos="fade-left" class="form-inline my-2 my-lg-0 btn-form-nav">
            <button class="nav-btn-1" type="submit">Customize your package</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
