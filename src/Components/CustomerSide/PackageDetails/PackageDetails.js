import React, { useEffect, useState } from 'react';
import "./styles.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CarouselPkg from './CarouselPkg/CarouselPkg';
import HotelIcon from '@material-ui/icons/Hotel';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import Corousel from '../Corousel/Corousel';
import ReviewsComponent from './ReviewsComponent/ReviewsComponent';
import StarIcon from '@material-ui/icons/Star';
import RatingBar from './RatingBar/RatingBar';
import BlackBar from "../../../Assets/BlackBar.png";
import PkgCorousel from './PkgCorousel/PkgCorousel';


const PackageDetails = ({rating}) => {


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
                <h6>Highlights</h6>
             
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-2">
                <h6>Inclusions</h6>
                
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-3">
                <h6>How it works</h6>
                
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-4">
                <h6>Itinerary</h6>
                

                </div>

                <div className="col-lg-2 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-5">
                <h6>Overview</h6>
                <div className="highlight-line-pkg"></div>

                </div>

                <div className="col-lg-1 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-6">
                <h6>FAQS</h6>
                

                </div>

                <div className="col-lg-1 col-md-4 col-sm-12 pkg-heads-Cols pkg-head-7">
                    <ArrowBackIcon/>
                </div>
            </div>

            
                        {/* ############ ROW-3  ########### */}

                    <div style={{marginTop: "2rem"}} className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">

                        <PkgCorousel/>

                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col">
                                    <h2>Gokharna</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{rating}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <p style={{color: "gray", fontSize: "12px"}}>Aventure</p>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                <p style={{color: "gray", fontSize: "12px"}}>Hills</p>
                                        </div>
                                        <div className="col-lg-2 col-md-6 col-sm-12">
                                        <p style={{color: "gray", fontSize: "12px"}}>Hiking</p>
                                        </div>
                                        <div className="col-lg-2 col-md-6 col-sm-12">
                                        <p style={{color: "gray", fontSize: "12px"}}>Trekking</p>
                                        </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>4 Days / 5 Nights</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p style={{fontSize: "12px"}}>From</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col ">
                                    <h6 style={{color: "#ff4f4f", marginBottom: "1rem"}}>15000/-<small>per person</small></h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                <button style={{border: "none", padding: "5px", width: "90px", color: "white", background:"#ff4f4f"}}>Book</button>
                                </div>
                                <div className="col-lg-1 col-md-6 col-sm-12">
                                <button style={{border: "2px solid gray", padding: "5px", width: "100px", background:"none"}}>Customise</button> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6 style={{marginTop: "1rem", marginBottom: "1rem"}}>Overview</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p style={{fontSize: "12px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iure, et, animi veritatis labore quae non aspernatur dignissimos, voluptatibus nemo debitis eveniet facilis optio ipsa. Harum porro suscipit quae? Eligendi.</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* ############ ROW-4  ########### */}

                    <div style={{marginTop: "2rem"}} className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">

                            <div className="row" style={{border: "2px solid black"}}>
                                <div className="col">
                                <h6 style={{color: "#ff4f4f", marginTop: "1rem", marginBottom: "1rem"}}>Highlights</h6>
                                <p style={{fontSize: "14px", marginBottom: "1rem"}}>Lorem ipsum dolor sit, amet consectetur labore ipsa molestias veritatis laborum, laboriosam dolor recusandae impedit vitae iure quis officiis ab possimus sunt!</p>
                                <p style={{fontSize: "14px", marginBottom: "1rem"}}>Lorem ipsum dolor sit, amet consectetur labore ipsa molestias veritatis laborum, laboriosam dolor recusandae impedit vitae iure quis officiis ab possimus sunt!</p>
                                <p style={{fontSize: "14px", marginBottom: "1rem"}}>Lorem ipsum dolor sit, amet consectetur labore ipsa molestias veritatis laborum, laboriosam dolor recusandae impedit vitae iure quis officiis ab possimus sunt!</p>
                                <p style={{fontSize: "14px", marginBottom: "1rem"}}>Lorem ipsum dolor sit, amet consectetur labore ipsa molestias veritatis laborum, laboriosam dolor recusandae impedit vitae iure quis officiis ab possimus sunt!</p>
                                <p style={{fontSize: "14px", marginBottom: "1rem"}}>Lorem ipsum dolor sit, amet consectetur labore ipsa molestias veritatis laborum, laboriosam dolor recusandae impedit vitae iure quis officiis ab possimus sunt!</p>
                               
                               </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <h6 style={{marginTop: "1rem", marginBottom: "1rem"}}>Inclusion</h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                                <HotelIcon/>
                                <p style={{fontSize: "12px", marginLeft: "10px"}}>Hotels</p>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                                <RestaurantMenuIcon/>
                                <p style={{fontSize: "12px", marginLeft: "10px"}}>Meals</p>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                                    <EmojiTransportationIcon/>
                                    <p style={{fontSize: "12px", marginLeft: "10px"}}>Transport</p>
                                </div>
                            </div>

                            <div style={{marginTop: "1rem", marginBottom: "1rem"}} className="row">
                                <div className="col">
                                    <h6>How it works</h6>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p style={{fontSize: "13px", marginLeft: "10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                                        </div></div>

                                        <div className="row">
                                    <div className="col">
                                        <p style={{fontSize: "13px", marginLeft: "10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                                        </div></div>

                                        <div className="row">
                                    <div className="col">
                                        <p style={{fontSize: "13px", marginLeft: "10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                                        </div></div>

                                        <div style={{marginTop: "1rem", marginBottom: "1rem"}}  className="row">
                                            <div className="col">
                                                <h5>FAQ's</h5>
                                            </div>
                                        </div>

                                        <div className="row">
                                    <div className="col">
                                        <p style={{fontSize: "13px", marginLeft: "10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                                        </div></div> <hr style={{ color: "gray", height:"2px"}}/>
                                        <div className="row">
                                    <div className="col">
                                        <p style={{fontSize: "13px", marginLeft: "10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                                        </div></div> <hr style={{ color: "gray", height:"2px"}}/>
                                        <div className="row">
                                    <div className="col">
                                        <p style={{fontSize: "13px", marginLeft: "10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsectetur adipisicing quaerat itaque! Totam!</p>
                                        </div></div> <hr style={{ color: "gray", height:"2px"}}/>

                        </div>
                        <div style={{background: "black", marginLeft: "1rem", textAlignLast: "center"}} className="col-lg-5 col-md-12 col-sm-12">
                        <h6 style={{ color: "white", padding: "1rem"}}>Itinerary</h6>
                        <img style={{ height: "750px", marginTop: "-8rem", margin:"auto"}} src={BlackBar} alt=""/>
                        </div>
                    </div>   


                    {/* ############ ROW-5  ########### */}

                    <div style={{marginTop: "2rem"}} className="row">
                        <div className="col">
                        <h6>Similar packages to this one</h6>
                        <p style={{fontSize: "13px"}}><u>View All</u></p>
                        </div>
                        </div>    

                        
                    {/* ############ ROW-6  ########### */}

                    <div style={{marginTop: "2rem"}} className="row">
                        <div className="col">
                       <Corousel/>
                        </div>
                        </div>   

                        {/* ############ ROW-7  ########### */}

                    <div style={{marginTop: "2rem"}} className="row">
                        <div className="col">
                        <h6>Reviews and Ratings</h6>
                        <p style={{fontSize: "13px"}}><u>View All</u></p>
                        </div>
                        </div>   

                         {/* ############ ROW-7  ########### */}

                    <div style={{marginTop: "2rem",marginBottom: "4rem"}} className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                       <div style={{marginTop: "1rem"}} className="row"><div className="col"><ReviewsComponent/></div></div>
                       <div style={{marginTop: "1rem"}} className="row"><div className="col"><ReviewsComponent/></div></div>
                       <div style={{marginTop: "1rem"}} className="row"><div className="col"><ReviewsComponent/></div></div>
                       <div style={{marginTop: "1rem"}} className="row"><div className="col"><ReviewsComponent/></div></div>
                       <div style={{marginTop: "1rem"}} className="row"><div className="col"><ReviewsComponent/></div></div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                       <div style={{textAlignLast: "center", marginBottom: "1rem"}} className="row">
                           <div className="col">
                           
                                <div className="circle-rating-pkg">
                                    4
                                </div>
                                <p style={{fontSize: "8px"}}>Based on 68 ratings</p>
                           
                           </div></div>

                           <div className="row">
                               <div className="col">
                               <RatingBar/>
                               </div>                             
                           </div>
                           <div className="row">
                               <div className="col">
                               <RatingBar/>
                               </div>                             
                           </div>
                           <div className="row">
                               <div className="col">
                               <RatingBar/>
                               </div>                             
                           </div>
                           <div className="row">
                               <div className="col">
                               <RatingBar/>
                               </div>                             
                           </div>
                           <div className="row">
                               <div className="col">
                               <RatingBar/>
                               </div>                             
                           </div>

                        </div>
                        </div>  

                        <div style={{textAlign: "-webkit-right"}} className="row">
                            <div className="col">
                                <div style={{width: "90%", height: "2px", background: "black"}} className="footer-diveder-line-pkg">

                                </div>
                            </div>
                        </div>



        </div>
    )
}

export default PackageDetails;
