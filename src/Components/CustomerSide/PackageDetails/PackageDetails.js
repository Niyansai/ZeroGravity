import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import "./styles.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CarouselPkg from './CarouselPkg/CarouselPkg';
import HotelIcon from '@material-ui/icons/Hotel';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import Corousel from './PkgCorousel/PkgCorousel';
import ReviewsComponent from './ReviewsComponent/ReviewsComponent';
import StarIcon from '@material-ui/icons/Star';
import RatingBar from './RatingBar/RatingBar';
import BlackBar from "../../../Assets/BlackBar.png";
import PkgCorousel from './PkgCorousel/PkgCorousel';
import API from '../../../Utils/Utils';
import axios from 'axios';

import Login from '../Login/LoginModal/Login';


const PackageDetails = () => {

    const { id } = useParams();
    const history = useHistory();


    const [userPackages, setUserPackages] = useState([]);

    useEffect(() => {
        loadUserPackage();
    }, []);


    const loadUserPackage = async () => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            alert("Please login");
            history.push("/home");
            return;
        }

        // token exists 
        await axios.get(API.SEARCH_PACKAGE_BY_ID, {
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                "id": id
            }

        })
            .then((response) => {
                if (response.data.data) {
                    setUserPackages(response.data.data)
                }
            })
            .catch((err) => {
                console.log(err);
            });


    }

    const moveback = () => {
        history.push("/packagesearch");
    }

    return (

        <div className="container-fluid pkg-details-container" >

            {/* ############ LINE DIVIDER ########### */}

            <div className="row head-diveder-lin-pkg-row">
                <div className="col">
                    <div className="head-diveder-lin-pkg">

                    </div>
                </div>
            </div>


            {/* ############ ROW-2  ########### */}

            <div className="row pkg-heads-row">
                <div className="col-lg-2 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-1">
                    <a href="#highlights">Highlights</a>

                </div>

                <div className="col-lg-2 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-2">
                    <a href="#inclusions">Inclusions</a>

                </div>

                <div className="col-lg-2 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-3">
                    <a href="#hiw">How it works</a>

                </div>

                <div className="col-lg-2 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-4">
                    <a href="#highlights">Itinerary</a>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-5">
                    <h6>Overview</h6>
                    <div className="highlight-line-pkg"></div>

                </div>

                <div className="col-lg-1 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-6">
                    <a href="#faq">FAQS</a>


                </div>

                <div className="col-lg-1 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-7">
                    <ArrowBackIcon onClick={moveback} />
                </div>
            </div>


            {/* ############ ROW-3  ########### */}

            <div style={{ marginTop: "2rem" }} className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">

                    <PkgCorousel data={userPackages.photos} />

                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col">
                            <h2>{userPackages.name}</h2>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <div className="col">
                            <RatingBar width={userPackages.rating} />
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col">
                            <p>{userPackages.rating} Star Rating</p>
                        </div>
                    </div> */}
                    <div className="row">
                        {userPackages.activities && userPackages.activities.length > 0 &&
                            userPackages.activities.map((item, index) => {
                                return (<div className="col-lg-2 col-md-6 col-sm-12">
                                    <p style={{ color: "gray", fontSize: "12px", marginRight: "10px" }}>{item.toString().toUpperCase()}</p>
                                </div>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                        {
                            userPackages.stay &&

                            <div className="col">
                                <h6>{userPackages.stay.join()}</h6>
                            </div>
                        }
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{ fontSize: "12px" }}>From</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col ">
                            <h6 style={{ color: "#ff4f4f", marginBottom: "1rem" }}>{userPackages.starting_price}/-<small>per person</small></h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <button style={{ border: "none", height: "40px", padding: "5px", width: "90px", color: "white", background: "#ff4f4f" }}>Book</button>
                        </div>
                        <div className="col-lg-1 col-md-6 col-sm-12">
                            <button style={{ border: "2px solid gray", height: "40px", padding: "5px", width: "100px", background: "none" }}>Customise</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6 style={{ marginTop: "1rem", marginBottom: "1rem" }}>Overview</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{ fontSize: "12px" }}>{userPackages.description}</p>
                        </div>
                    </div>

                </div>
            </div>


            {/* ############ ROW-4  ########### */}

            <div style={{ marginTop: "2rem" }} className="row" id="highlights">
                <div className="col-lg-6 col-md-12 col-sm-12">

                    <div className="row" style={{ border: "2px solid black" }}>
                        <div className="col">
                            <h6 style={{ color: "#ff4f4f", marginTop: "1rem", marginBottom: "1rem" }}>Highlights</h6>

                            <div className="row">
                                <h6 style={{ color: "#121212", marginTop: "1rem", marginBottom: "1rem" }}>Activities</h6>
                                {userPackages.activities && userPackages.activities.length > 0 &&
                                    userPackages.activities.map((item, index) => {
                                        return (<div className="col-lg-2 col-md-6 col-sm-12">
                                            <p style={{ color: "gray", fontSize: "12px", marginRight: "10px" }}>{item.toString().toUpperCase()}</p>
                                        </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="row">
                                <h6 style={{ color: "#121212", marginTop: "1rem", marginBottom: "1rem" }}>Meals</h6>
                                {userPackages.meal && userPackages.meal.length > 0 &&
                                    userPackages.meal.map((item, index) => {
                                        return (<div className="col-lg-2 col-md-6 col-sm-12">
                                            <p style={{ color: "gray", fontSize: "12px", marginRight: "10px" }}>{item.toString().toUpperCase()}</p>
                                        </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="row">
                                <h6 style={{ color: "#121212", marginTop: "1rem", marginBottom: "1rem" }}>Transport</h6>
                                {userPackages.transport && userPackages.transport.length > 0 &&
                                    userPackages.transport.map((item, index) => {
                                        return (<div className="col-lg-2 col-md-6 col-sm-12">
                                            <p style={{ color: "gray", fontSize: "12px", marginRight: "10px" }}>{item.toString().toUpperCase()}</p>
                                        </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="row">
                                <h6 style={{ color: "#121212", marginTop: "1rem", marginBottom: "1rem" }}>Extra</h6>
                                {userPackages.special && userPackages.special.length > 0 &&
                                    userPackages.special.map((item, index) => {
                                        return (<div className="col-lg-2 col-md-6 col-sm-12">
                                            <p style={{ color: "gray", fontSize: "12px", marginRight: "10px" }}>{item.toString().toUpperCase()}</p>
                                        </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="row">
                                <h6 style={{ color: "#121212", marginTop: "1rem", marginBottom: "1rem" }}>Tags</h6>
                                {userPackages.tags && userPackages.tags.length > 0 &&
                                    userPackages.tags.map((item, index) => {
                                        return (<div className="col-lg-2 col-md-6 col-sm-12">
                                            <p style={{ color: "gray", fontSize: "12px", marginRight: "10px" }}>{item.toString().toUpperCase()}</p>
                                        </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>

                    <div className="row" id="inclusions">
                        <div className="col">
                            <h6 style={{ marginTop: "1rem", marginBottom: "1rem" }}>Inclusion</h6>
                        </div>
                    </div>

                    <div className="row">
                        {
                            userPackages.stay && userPackages.stay.length > 0 &&
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                                <HotelIcon />
                                <p style={{ fontSize: "12px", marginLeft: "10px" }}>Hotels</p>
                            </div>
                        }
                        {
                            userPackages.meal && userPackages.meal.length > 0 &&
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                                <RestaurantMenuIcon />
                                <p style={{ fontSize: "12px", marginLeft: "10px" }}>Meals</p>
                            </div>
                        }
                        {
                            userPackages.transport && userPackages.transport.length > 0 &&
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                                <EmojiTransportationIcon />
                                <p style={{ fontSize: "12px", marginLeft: "10px" }}>Transport</p>
                            </div>
                        }
                    </div>

                    <div style={{ marginTop: "1rem", marginBottom: "1rem" }} className="row" id="hiw">
                        <div className="col">
                            <h6>How it works</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{ fontSize: "13px", marginLeft: "10px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                        </div></div>

                    <div className="row">
                        <div className="col">
                            <p style={{ fontSize: "13px", marginLeft: "10px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                        </div></div>

                    <div className="row">
                        <div className="col">
                            <p style={{ fontSize: "13px", marginLeft: "10px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                        </div></div>

                    <div style={{ marginTop: "1rem", marginBottom: "1rem" }} className="row" id="faq">
                        <div className="col">
                            <h5>FAQ's</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p style={{ fontSize: "13px", marginLeft: "10px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                        </div></div> <hr style={{ color: "gray", height: "2px" }} />
                    <div className="row">
                        <div className="col">
                            <p style={{ fontSize: "13px", marginLeft: "10px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                        </div></div> <hr style={{ color: "gray", height: "2px" }} />
                    <div className="row">
                        <div className="col">
                            <p style={{ fontSize: "13px", marginLeft: "10px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                        </div></div> <hr style={{ color: "gray", height: "2px" }} />

                </div>
                <div style={{ background: "black", marginLeft: "1rem", textAlignLast: "center" }} className="col-lg-5 col-md-12 col-sm-12">
                    <h6 style={{ color: "white", padding: "1rem" }}>Itinerary</h6>
                    <img style={{ height: "750px", marginTop: "-8rem", margin: "auto" }} src={BlackBar} alt="" />
                </div>
            </div>


            {/* ############ ROW-5  ########### */}

            <div style={{ marginTop: "2rem" }} className="row">
                <div className="col">
                    <h6>Similar packages to this one</h6>
                    <p onClick={moveback} style={{ fontSize: "13px" }}><u>View All</u></p>
                </div>
            </div>


            {/* ############ ROW-6  ########### */}

            <div style={{ marginTop: "2rem" }} className="row">
                <div className="col">
                    <Corousel />
                </div>
            </div>

            {/* ############ ROW-7  ########### */}

            <div style={{ marginTop: "2rem" }} className="row">
                <div className="col">
                    <h6>Reviews and Ratings</h6>
                    <p style={{ fontSize: "13px" }}><u>View All</u></p>
                </div>
            </div>

            {/* ############ ROW-7  ########### */}

            <div style={{ marginTop: "2rem", marginBottom: "4rem" }} className="row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div style={{ marginTop: "1rem" }} className="row"><div className="col"><ReviewsComponent /></div></div>
                    <div style={{ marginTop: "1rem" }} className="row"><div className="col"><ReviewsComponent /></div></div>
                    <div style={{ marginTop: "1rem" }} className="row"><div className="col"><ReviewsComponent /></div></div>
                    <div style={{ marginTop: "1rem" }} className="row"><div className="col"><ReviewsComponent /></div></div>
                    <div style={{ marginTop: "1rem" }} className="row"><div className="col"><ReviewsComponent /></div></div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    {/* <div style={{ textAlignLast: "center", marginBottom: "1rem" }} className="row">
                        <div className="col">

                            <div className="circle-rating-pkg">
                                4
                                </div>
                            <p style={{ fontSize: "8px" }}>Based on 68 ratings</p>

                        </div>
                    </div> */}


                </div>
            </div>

            <div style={{ textAlign: "-webkit-right" }} className="row">
                <div className="col">
                    <div style={{ width: "90%", height: "2px", background: "black" }} className="footer-diveder-line-pkg">

                    </div>
                </div>
            </div>



        </div>
    )
}

export default PackageDetails;
