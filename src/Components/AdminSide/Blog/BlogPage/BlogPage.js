import React, { useState } from 'react';
import "./styles.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import img1 from "../../../../Assets/img1.png";
import img2 from "../../../../Assets/img2.png";
import img3 from "../../../../Assets/img3.png";
import img4 from "../../../../Assets/img4.png";
import VerticalImgBlog from "../../../../Assets/VerticalImgBlog.png";
import { useHistory } from 'react-router';


const BlogPage = () => {



    const history = useHistory()

    const handleMoveBack = () => {
            history.push('/dashboard')
    }

  

    return (
        <div className="container blog-main-container">
            <div className="line-divider"> 
                </div>

            <div className="row blog-rw-1">

                <div className="col-lg-2 col-md-2 col-sm-12 blog-rw-1-col-1">
                    <h6>Highlights</h6>
                    <div className="highlight-line"></div>
                    
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 blog-rw-1-col-2">
                    <h6>New</h6>
                </div>
                <div className="col-lg-8 col-md-2 col-sm-12 blog-rw-1-col-3">
                    <div onClick={handleMoveBack} className="bg-black-bck-arw">
                        <ArrowBackIosIcon />                     
                    </div>
                    <p><small>Back</small></p>
                </div>

            </div>

            {/* ################### ROW 2 ###################### */}

            <div className="row blog-rw-2">

            <div className="col-lg-4 col-md-6 col-sm-12 blog-rw2-col-mb-space blog-rw-2-col-1">

            <img src={img1} className="img-fluid blg-img1" alt=""/>
            <p className="blog-rw-2-col-2-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Denecessitatibus  eligend!<br/><br/>
            <span style={{ color: "red"}}> <u>Read more</u></span>
            </p>
            

            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 blog-rw2-col1-mb-space blog-rw-2-col-2">
            <img src={img3} className="img-fluid blg-img2" alt=""/>
            <p className="blog-rw-2-col-2-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Denecessitatibus el voluptatibus  eligend!</p>
            <p style={{ color: "red", marginTop: "2rem"}}> <u>Read more</u></p>
            </div>


            <div className="col-lg-3 col-md-6 col-sm-12 blog-rw2-col-mb-space blog-rw-2-col-3">

            <img src={img2} className="img-fluid blg-img3" alt=""/>
            <p className="blog-rw-2-col-2-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Denecessitatibus el voluptatibus  eligend!</p>
            <p style={{ color: "red", marginTop: "2rem"}}> <u>Read more</u></p>
            </div>

            </div>

                        {/* ################### ROW 3 ###################### */}

            <div className="row blog-rw-3">

            <div className="col-lg-4 col-md-6 col-sm-12 blog-rw2-col-mb-space blog-rw-3-col-1">

                <img src={img4} className="img-fluid blg-img4" alt=""/>

                <button className="img-btn-view-all">View All</button>

                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 blog-rw2-col-mb-space blog-rw-3-col-2">
                <img src={img3} className="img-fluid blg-img2" alt=""/>
                <p className="blog-rw-3-col-1-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Denecessitatibus el voluptatibus  eligend!</p>
                <p style={{ color: "red", marginTop: "2rem"}}> <u>Read more</u></p>
                </div>


                <div className="col-lg-3 col-md-6 col-sm-12 blog-rw2-col-mb-space blog-rw-3-col-3">

                <img src={img2} className="img-fluid blg-img3" alt=""/>
                <p className="blog-rw-3-col-2-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Denecessitatibus el voluptatibus  eligend!</p>
                <p style={{ color: "red", marginTop: "2rem"}}> <u>Read more</u></p>
                </div>


            </div>

                        {/* ################### ROW 4 ###################### */}

            <div className="row blog-rw-4">
                <div className="col-lg-8 col-md-6 col-sm-12 blog-rw-4-col-1">
                    <h5>New Blogs</h5>
                <div className="row blog-rw-4-col-1-srw-1 blg-sbrws">
            <div className="col-lg-9 col-md-6 col-sm-12 blog-rw-4-col-1-srw-1-col-1">

                <p style={{fontWeight: "500"}}>Lorem ipsum, dolor sit amet consoluptatum neque similique minima! At, eligendi? Minus.</p>
                <p style={{ color: "red", textAlign: "end", fontSize: "13px", marginBottom: "-1rem"}}> <u>Read more</u></p>
                <span style={{fontSize:"12px", marginTop: "-1rem"}}><small>By</small> &nbsp;<b>Shelly Turner</b></span>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 blog-rw-4-col-1-srw-1-col-2">

                <img className="img-fluid blg-img-lmr" src={img3} alt=""/>

            </div>

                </div>

                <div className="row blog-rw-4-col-1-srw-2 blg-sbrws">
            <div className="col-lg-9 col-md-6 col-sm-12 blog-rw-4-col-1-srw-1-col-1">

                <p style={{fontWeight: "500"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                <p style={{ color: "red", textAlign: "end", fontSize: "13px", marginBottom: "-1rem"}}> <u>Read more</u></p>
                <span style={{fontSize:"12px", marginTop: "-1rem"}}><small>By</small> &nbsp;<b>Shelly Turner</b></span>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 blog-rw-4-col-1-srw-1-col-2">

                <img className="img-fluid blg-img-lmr" src={img2} alt=""/>

            </div>

                </div>

                <div className="row blog-rw-4-col-1-srw-3 blg-sbrws">
            <div className="col-lg-9 col-md-6 col-sm-12 blog-rw-4-col-1-srw-1-col-1">

                <p style={{fontWeight: "500"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.</p>
                <p style={{ color: "red", textAlign: "end", fontSize: "13px", marginBottom: "-1rem"}}> <u>Read more</u></p>
                <span style={{fontSize:"12px", marginTop: "-1rem"}}><small>By</small> &nbsp;<b>Shelly Turner</b></span>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 blog-rw-4-col-1-srw-1-col-2">

                <img className="img-fluid blg-img-lmr" src={img3} alt=""/>

            </div>

                </div>

                <div className="row blog-rw-4-col-1-srw-4 blg-sbrws">
            <div className="col-lg-9 col-md-6 col-sm-12 blog-rw-4-col-1-srw-1-col-1">

                <p style={{fontWeight: "500"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
                </p>
                <p style={{ color: "red", textAlign: "end", fontSize: "13px", marginBottom: "-1rem"}}> <u>Read more</u></p>
                <span style={{fontSize:"12px", marginTop: "-1rem"}}><small>By</small> &nbsp;<b>Shelly Turner</b></span>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 blog-rw-4-col-1-srw-1-col-2">

                <img className="img-fluid blg-img-lmr" src={img2} alt=""/>

            </div>

                </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 blog-rw-4-col-2">

                <img className="img-fluid blg-lst-col-vertical-img" src={VerticalImgBlog} alt=""/>
                <button className="btn-vertical-img">View All</button>

                </div>           

            </div>

            <div className="line-divider blg-ftr-divder"> 
                </div>
            
        </div>
    )
}

export default BlogPage;
