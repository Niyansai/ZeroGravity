import React, { useEffect, useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar, Grid, Paper } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, useParams } from 'react-router-dom';
import API from '../../../../Utils/Utils';
import axios from 'axios';


const ViewBlog = () => {

  const { id } = useParams();

  const history = useHistory();

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = async () => {
    const token = sessionStorage.getItem("token");
    if (token == null) {
      history.push("/");
      return;
    }

    // token exists 
    const result = await axios.get(API.GET_BLOG, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      params: {
        "id": id
      }
    });

    if (result.data.data)
      setBlog(result.data.data[0])
  }

  // ############################# OnClick Handlers ###############################

  const handleMoveback = () => {
    history.push('/blog')
  }

  const logoutHandler = () => {
    const token = sessionStorage.removeItem("token");
    if (token == null) {
      history.push("/");
      return;
    }
  }


  return (

    <div className="container cpr-cntnr">


      {/* ################ ROW-1 ################## */}

      <div className="row cpr-rw-1">

        <div className="col-lg-10 col-md-6 col-sm-12 cpr-rw1-col-1">

          <img className="img-fluid cpr-rw1-col-1-logo" src={GravityLogo} alt="" />

        </div>

        <div className="col-lg-2 col-md-6 col-sm-12 cpr-rw1-col-2">
          <Avatar src={RealProfilePic} />
          <p style={{ marginLeft: "1rem", fontSize: "12px" }}> {sessionStorage.getItem("user")} <br /><span><small style={{ cursor: "pointer" }} onClick={logoutHandler}>Logout</small></span></p>

        </div>

      </div>

      {/* ################ ROW-2 ################## */}

      <div className="row cpr-rw-2">

        <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
          <h3 style={{ color: "gray" }}>View Blog</h3>
        </div>


        <div className="col-lg-2 col-md-6 col-sm-6 cpr-rw-2-col-2">

          <div onClick={handleMoveback} className="bg-black-bck-arw cpr-back-arrow">
            <ArrowBackIosIcon />
          </div>
          <p><small>Back</small></p>
        </div>
      </div>

      {/* ################ ROW-3 ################## */}
      <Paper className="paper-view-pack">
        <div className="row">

          <div className="col-lg-6 col-md-6 col-sm-12 view-pack-title">
            <h1>BLOG DETAILS</h1>
            {blog.photos && blog.photos.length > 0 &&
              <img className="center" style={{ width: "200px", paddingTop: "10px", paddingBottom: "10px" }} src={API.GET_IMAGE + "?image=" + blog.photos[0]}></img>
            }
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {
              Object.entries(blog).map(([key, val]) =>
                <Grid className="view-pack-key"><span className="vw-pack-key">{key}:</span>&nbsp;&nbsp;<span className="vw-pack-val">{val}</span></Grid>

              )}
          </div>
        </div>


      </Paper>

    </div>
  )
}

export default ViewBlog;
