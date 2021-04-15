import React, { useEffect, useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar, Grid, Paper } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, useParams } from 'react-router-dom';
import API from '../../../../Utils/Utils';
import axios from 'axios';


const ViewUser = () => {

  const { id } = useParams();

  const history = useHistory();


  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, [])



  //   ######################### GET DATA FOR AUTOMATIC UPLOAD OF DATA #############################



  const loadUser = async () => {
    const token = sessionStorage.getItem("token");
    if (token == null) {
      history.push("/");
      return;
    }

    // token exists 
    const result = await axios.get(API.GET_USER, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      params: {
        "id": id
      }
    });

    setUser(result.data.data)
  }

  // ############################# OnClick Handlers ###############################

  const handleMoveback = () => {
    history.push('/customerdatabase')
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
          <p style={{ marginLeft: "1rem", fontSize: "12px" }}>Ram Singh <br /><span><small>Logout</small></span></p>

        </div>

      </div>

      {/* ################ ROW-2 ################## */}

      <div className="row cpr-rw-2">

        <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
          <h3 style={{ color: "gray" }}>View User</h3>
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
            <h1>USER DETAILS</h1>
            {/* <img className="center" style={{ width: "200px", paddingTop: "10px", paddingBottom: "10px" }} src={API.GET_IMAGE + "?image=" + user.avatar}></img> */}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {
              Object.entries(user).map(([key, val]) =>
                <Grid className="view-pack-key"><span className="vw-pack-key">{key}:</span>&nbsp;&nbsp;<span className="vw-pack-val">{val}</span></Grid>

              )}
          </div>
        </div>


      </Paper>

    </div>
  )
}

export default ViewUser;
