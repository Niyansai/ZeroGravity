import React from 'react'
import Footer from '../../../Footer/Footer';
import Navbar from '../../../Navbar/Navbar';
import "./styles.css";
import MainImg from './MainImg.png';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Grid } from '@material-ui/core';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Corousel from '../../Corousel/Corousel';
import ScrollComponent from '../ScrollComponent/ScrollComponent';

const HomeAfterLogin = () => {
    return (
        <div className="container-fluid hm-main-cntnr">
            <div className="row hm-rw-1">
                <div className="col-lg-1 col-md-0 col-sm-0 col-verticle-icons">
                <div className="hm-social-icons">
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <p className="vertical-text-hm">Find us on</p>
                </div>
                <div class="verticalLine">
                        </div>
                </div>
                <div className="col-lg-11 col-md-12 col-sm-12 hm-rw1-col2-img-bg">
                   <div className="hm-heading">
                       <p>Welcome</p>
                       <h2>START <span style={{color: "#ff4f4f"}}>YOUR</span><br/> 
                       ADVENTURE TODAY !!
                       </h2>
                       <button>Find a Package</button>
                   </div>

                   <div className="hm-onimg-down">
                    <p>Type <span><ArrowDropDownIcon/></span></p>
                    <p>State <span><ArrowDropDownIcon/></span></p>
                    <p>City <span><ArrowDropDownIcon/></span></p>
                    <p>Month <span><ArrowDropDownIcon/></span></p>
                    <p>Days <span><ArrowDropDownIcon/></span></p>
                    <input type="text" placeholder="Search for Packages"/>
                    <div className="rectangle-search"><SearchIcon/></div>
                   </div>

                </div>
            </div>

            {/* ############################## ROW-2 ############################ */}

            <div className="row hm-rw-2">
                <div className="col-lg-12 col-md-6 col-sm-12 hm-rw1-col">
                    <Grid container className="rw-2-grid-cntnr">
                        <Grid className="rw2-circle-1">
                            <div className="circle-hm-1">
                                <DirectionsWalkIcon/>
                                <p>Solo</p>
                            </div>
                           
                        </Grid>
                        <Grid className="rw2-circle-1">
                            <div className="circle-hm-1">
                                <DirectionsWalkIcon/>
                                <p>Family</p>
                            </div>
                            
                        </Grid>
                        <Grid className="rw2-circle-1">
                            <div className="circle-hm-1">
                                <DirectionsWalkIcon/>
                                <p>Honeymoon</p>
                            </div>
                            
                        </Grid>
                        <Grid className="rw2-circle-1">
                            <div className="circle-hm-1">
                                <DirectionsWalkIcon/>
                                <p>Group</p>
                            </div>
                            
                        </Grid>
                        <Grid className="rw2-circle-1">
                            <div className="circle-hm-1">
                                <DirectionsWalkIcon/>
                                <p>Adventure</p>
                            </div>
                           
                        </Grid>
                        
                        
                    </Grid>
                </div>
            </div>

            {/* ############################## ROW-3 ############################ */}

                <div className="row">
                    <div className="container">
                        <div className="row slider-row-complete">
                        <div className="col-lg-10 col-md-12 col-sm-12">

                            <Corousel/>
                            </div>
                        </div>
                    </div>
                   
                </div>

                 {/* ############################## ROW-4 ############################ */}

                 <div className="row hm-row-4">

                     <div className="col-lg-8 col-md-8 col-sm-12">
                        <ScrollComponent/>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-12">

                     </div>

                 </div>
           
        </div>
    )
}

export default HomeAfterLogin;
