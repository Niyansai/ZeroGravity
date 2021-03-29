import React from 'react';
import "./styles.css";
import GravityLogo from "../../Assets/GravityLogo.png";
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <div className="container-fluid">
          <div className="row ftr-rw-tp ftr-cntanr">
              <div className="col-lg-3 col-md-4 col-sm-12 ftr-rw-tp-col-1">
              <img class="logo-G-ft img-fluid" src={GravityLogo} alt=""/><br/>
              <div className="logo-img-btm">
               <div><PhoneIcon/> &nbsp; <b>+91 999678628</b></div>
               <div className="ftr-col-1-img-data"><MailOutlineIcon/> &nbsp; <b>ZeroGravityAW@gmail.com</b></div>
               </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-12 ftr-rw-tp-col-2">
                    <ul className="ftr-col-2-items">
                        <li>About Us</li>
                        <li>Team</li>
                        <li>Testimonials</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                    </ul>                
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-12 ftr-rw-tp-col-3">
                <h6><b>Connnect With Us</b></h6>
                <div className="social-icons">
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>
                </div>    
                <p className="ftr-col-3-p"><small>                   
                    Street number, Flat number <br/>
                    Area of the place,<br/>
                    Gowlidoddy, Gachibowli,<br/>
                    Hyderabad, telangana-500032
                    </small>
                    </p>            
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="enquiry-btn-felx">
                        <h6><b>Inquiry</b></h6>
                        <button>Send</button>
                    </div>
                    <div className="dash-desc">
                    <p>Full Name</p>
                    <input type="text"/>
                    </div>
                    <div className="dash-desc">
                    <p>Phone Number</p>
                    <input type="text"/>
                    </div>
                    <div className="dash-desc">
                    <p>Email Address</p>
                    <input type="text"/>
                    </div>
                  
                  </div>
                  
                  </div>  


                  <div className="row row-btm">
                        <div className="col">
                            <div className="ftr-btm-flex">
                            <p>Terms and Conditions </p>
                            <span>|</span>
                            <p>Cancellation Policy</p>
                            <span>|</span>
                            <p>Privacy Policy</p>
                            
                            </div>

                            <p><small style={{color: "white"}}>2019 ZeroGravity Adventure Club. All rights reserved</small></p>
                        


                        </div>
                  </div>
        </div>
    )
}

export default Footer
