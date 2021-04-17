import React, { useEffect, useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar, Grid, Paper } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, useParams } from 'react-router-dom';
import API from '../../../../Utils/Utils';
import axios from 'axios';


const ViewBooking = () => {

    const { id } = useParams();
    const history = useHistory();
    const [booking, setBooking] = useState([]);
    const [name, setName] = useState(sessionStorage.getItem("user"));
    const [user, setId] = useState(sessionStorage.getItem("id"));
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(0);
    const [packageId, setPackage] = useState("");

    const review = { name, user, rating, message };

    useEffect(() => {
        loadBooking();
    }, [])



    //   ######################### GET DATA FOR AUTOMATIC UPLOAD OF DATA #############################



    const loadBooking = async () => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/");
            return;
        }

        // token exists 
        const result = await axios.get(API.GET_BOOKING, {
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                "id": id
            }
        });

        if (result.data.data && result.data.data.length > 0) {
            setBooking(result.data.data[0]);
            setPackage(result.data.data[0].package);
        }
    }

    const submitForm = (e) => {
        e.preventDefault();

        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/home");
            return;
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        axios.post(API.ADD_REVIEW,
            {
                "id": packageId,
                "reviews": review
            }, {
            headers: headers
        })
            .then((resp) => {
                console.log(resp)
                if ('message' in resp.data) {
                    alert("Thank you for reviewing the package");
                    history.push('/dashboard');
                }
                else {
                    alert("Something went wrong");
                }
            })
            .catch((err) => {
                if (err.response && err.response.status === 401) {
                    history.push("/home");
                }
            });
    }

    // ############################# OnClick Handlers ###############################

    const handleMoveback = () => {
        history.push('/dashboard')
    }

    const AdminLogOut = () => {
        const token = sessionStorage.removeItem("token");

        if (token == null) {
            history.push("/home");
            return;
        }
    }

    const cancelBooking = () => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/home");
            return;
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        booking.id = id
        booking.status = "Cancelled"

        axios.post(API.UPDATE_BOOKING,
            booking, {
            headers: headers
        })
            .then((resp) => {
                if ('message' in resp.data) {
                    alert("Booking cancelled successfully");

                    history.push('/dashboard');
                }
                else {
                    alert("Something went wrong");
                }
            })
            .catch((err) => {
                if (err.response.status === 500) {
                    alert("Booking information is already available.");
                }
                if (err.response.status === 401) {
                    history.push("/home");
                }
            });
    }



    return (

        <div className="container cpr-cntnr" style={{ marginBottom: "30px" }}>


            {/* ################ ROW-1 ################## */}

            <div className="row cpr-rw-1">

                <div className="col-lg-10 col-md-6 col-sm-12 cpr-rw1-col-1">

                    <img className="img-fluid cpr-rw1-col-1-logo" src={GravityLogo} alt="" />

                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 cpr-rw1-col-2">
                    <Avatar src={RealProfilePic} />
                    <p style={{ marginLeft: "1rem", fontSize: "12px" }}> {sessionStorage.getItem("user")} <br /><span><small style={{ cursor: "pointer" }} onClick={AdminLogOut}> Logout </small></span></p>

                </div>

            </div>

            {/* ################ ROW-2 ################## */}

            <div className="row cpr-rw-2">

                <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
                    <h3 style={{ color: "gray" }}>View Booking</h3>
                </div>


                <div className="col-lg-2 col-md-6 col-sm-6 cpr-rw-2-col-2">

                    <div onClick={handleMoveback} className="bg-black-bck-arw cpr-back-arrow">
                        <ArrowBackIosIcon />
                    </div>
                    <p><small>Back</small></p>
                </div>
            </div>

            {/* ################ ROW-3 ################## */}

            <div className="row" style={{ marginTop: "20px" }}>

                <div className="col-lg-6 col-md-6 col-sm-12 view-pack-title">
                    <h1>BOOKING DETAILS</h1>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    {
                        Object.entries(booking).map(([key, val]) =>
                            <Grid className="view-pack-key"><span className="vw-pack-key">{key}:</span>&nbsp;&nbsp;<span className="vw-pack-val">{val}</span></Grid>

                        )}

                    <button onClick={(e) => { cancelBooking() }} className="cpr-approve-btn">CANCEL BOOKING</button>
                </div>

            </div>


            <div className="row head-diveder-lin-pkg-row" style={{ marginTop: "20px" }}>
                <div className="col">
                    <div className="head-diveder-lin-pkg">

                    </div>
                </div>
            </div>


            <div className="row" style={{ marginTop: "50px" }}>
                <h5>Submit a review </h5>
            </div>

            <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <form onSubmit={e => submitForm(e)}>


                        <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                <h6>Rating</h6>
                                <input className="cpr-inputs add-booking-inputs" name="rating" placeholder="Rating (1-5)" type="number" onChange={(e) => { setRating(e.target.value) }} />
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                <h6>Message</h6>
                                <input className="cpr-inputs add-booking-inputs" name="message" placeholder="Message" type="text" onChange={(e) => { setMessage(e.target.value) }} />
                            </div>
                        </div>

                    </form>
                </div>
            </div>



            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                    <button onClick={e => submitForm(e)} className="cpr-approve-btn">ADD REVIEW</button>
                </div>

            </div>


        </div>
    )
}

export default ViewBooking;
