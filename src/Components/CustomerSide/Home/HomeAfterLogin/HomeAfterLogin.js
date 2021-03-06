import React, { useState, useEffect } from 'react';
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
import PopularTripComponent from '../PopularTripComponent/PopularTripComponent';
import OurTeamCard from '../OurTeamCard/OurTeamCard';
import img2 from "../../../../Assets/img2.png";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Login from '../../../CustomerSide/Login/LoginModal/Login';
import API from '../../../../Utils/Utils';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const HomeAfterLogin = () => {

    const [packageOf, setPackages] = useState([]);
    const history = useHistory();

    useEffect(() => {
        AOS.init({
          duration: 2000,
          easing: 'ease'
        });
          }, [])

    useEffect(() => {
        loadPackage();
    }, []);

    const openPackageSearch = () => {
        history.push("/packagesearch");
    }

    const loadPackage = async () => {

        await axios.get(API.LIST_PACKAGES)
            .then((response) => {
                if (response.data.data && response.data.data.length > 0)
                setPackages(response.data.data.slice(0, 5));
            })
            .catch((err) => {
            });
    }

    return (
        <div className="container-fluid hm-main-cntnr">
            <div className="row hm-rw-1">
                <div data-aos="fade-down" className="col-lg-1 col-md-0 col-sm-0 col-verticle-icons">
                    <div className="hm-social-icons">
                        <InstagramIcon />
                        <FacebookIcon />
                        <TwitterIcon />
                        <p className="vertical-text-hm">Find us on</p>
                    </div>
                    <div class="verticalLine">
                    </div>
                </div>
                <div data-aos="fade-left" className="col-lg-11 col-md-12 col-sm-12 hm-rw1-col2-img-bg">
                    <div data-aos="zoom-in" className="hm-heading">
                        <p>Welcome</p>
                        <h2>START <span style={{ color: "#ff4f4f" }}>YOUR</span><br />
                       ADVENTURE TODAY !!
                       </h2>
                        <button>Find a Package</button>
                    </div>

                    <div className="hm-onimg-down">
                        <p>Type <span><ArrowDropDownIcon /></span></p>
                        <p>State <span><ArrowDropDownIcon /></span></p>
                        <p>City <span><ArrowDropDownIcon /></span></p>
                        <p>Month <span><ArrowDropDownIcon /></span></p>
                        <p>Days <span><ArrowDropDownIcon /></span></p>
                        <input type="text" placeholder="Search for Packages" />
                        <div className="rectangle-search"><SearchIcon /></div>
                    </div>

                </div>
            </div>

            {/* ############################## ROW-2 ############################ */}

            <div className="row hm-rw-2">
                <div className="col-lg-12 col-md-6 col-sm-12 hm-rw1-col">
                    <Grid container className="rw-2-grid-cntnr">
                        <Grid data-aos="fade-right" className="rw2-circle-1">
                            <div className="circle-hm-1">
                                <DirectionsWalkIcon />
                                <p >Solo</p>
                            </div>

                        </Grid>
                        <Grid data-aos="fade-right" className="rw2-circle-1">
                            <div className="circle-hm-1">
                                <DirectionsWalkIcon />
                                <p>Family</p>
                            </div>

                        </Grid>
                        <Grid data-aos="zoom-in" className="rw2-circle-1">
                            <div className="circle-hm-1">
                                <DirectionsWalkIcon />
                                <p>Honeymoon</p>
                            </div>

                        </Grid>
                        <Grid data-aos="fade-left" className="rw2-circle-1">
                            <div className="circle-hm-1">
                                <DirectionsWalkIcon />
                                <p>Group</p>
                            </div>

                        </Grid>
                        <Grid data-aos="fade-left" className="rw2-circle-1">
                            <div className="circle-hm-1">
                                <DirectionsWalkIcon />
                                <p>Adventure</p>
                            </div>

                        </Grid>


                    </Grid>
                </div>
            </div>

            {/* ############################## ROW-3 ############################ */}

            <div data-aos="fade-up" className="row">
                <div className="container">
                    <div className="row slider-row-complete">
                        <div className="col-lg-10 col-md-12 col-sm-12">

                            <Corousel packages={packageOf} />
                        </div>
                    </div>
                </div>

            </div>

            {/* ############################## ROW-4 ############################ */}

            <div data-aos="fade-up" className="row hm-row-4">

                <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="container popular-trip-container">
                        <div className="row image-scroll-row">
                            <div className="col">
                                <h6>Popular Trips</h6>
                                <p onClick={openPackageSearch}><small><u>View All</u></small></p>
                            </div>


                        </div>

                        {packageOf && packageOf.length > 0 &&
                            packageOf.map((item, index) => {
                                return <div className="row img-row-p-trip">
                                    <div className="col ">
                                        <PopularTripComponent
                                            id={item._id}
                                            img={item.photos[0]}
                                            from_text={`From Rs ${item.starting_price}`}
                                            title={item.name}
                                            description={item.description}
                                        />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div data-aos="fade-up" className="col-lg-4 col-md-4 col-sm-12 popular-category-row">
                    <div className="popular-category-col">
                        <h4 style={{ color: "white", textAlign: "center" }}>Popular<br />Categories</h4>

                    </div>
                </div>


            </div>

            {/* ############################## ROW-5 ############################ */}
            <div data-aos="zoom-in" className="row extra-title-ourTeam">
                <div className="col"> <h5>Our Team </h5> </div>
            </div>

            <div data-aos="fade-up" className="row hm-row-5 our-team-card-row">

                <div  data-aos="fade-right" className="col">
                    <OurTeamCard />
                </div>

                <div  data-aos="fade-right" className="col">
                    <OurTeamCard />
                </div>

                <div  data-aos="fade-left" className="col">
                    <OurTeamCard />
                </div>

                <div  data-aos="fade-left" className="col">
                    <OurTeamCard />
                </div>
            </div>

        </div>
    )
}

export default HomeAfterLogin;
