import React, { useEffect, useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../Assets/GravityLogo.png"
import { Avatar, Select } from '@material-ui/core';
import RealProfilePic from "../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';
import API from '../../../Utils/Utils';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AddBooking = () => {

    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const issue = { name, message };


    useEffect(() => {
        setName(sessionStorage.getItem("user"));
    }, [])


    const history = useHistory();

    const handleMoveback = () => {
        history.push('/dashboard')
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

        axios.post(API.ADD_INQUIRY,
            issue, {
            headers: headers
        })
            .then((resp) => {
                if ('message' in resp.data) {
                    alert("Issue has been raised");

                    history.push('/dashboard');
                }
                else {
                    alert("Something went wrong");
                }
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    history.push("/home");
                }
            });


    }


    const AdminLogOut = () => {
        const token = sessionStorage.removeItem("token");

        if (token == null) {
            history.push("/home");
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
                    <p style={{ marginLeft: "1rem", fontSize: "12px" }}> {sessionStorage.getItem("user")} <br /><span><small style={{ cursor: "pointer" }} onClick={AdminLogOut}> Logout </small></span></p>

                </div>

            </div>

            {/* ################ ROW-2 ################## */}

            <div className="row cpr-rw-2">

                <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
                    <h3>Raise Issue</h3>
                </div>


                <div className="col-lg-2 col-md-6 col-sm-6 cpr-rw-2-col-2">

                    <div onClick={handleMoveback} className="bg-black-bck-arw cpr-back-arrow">
                        <ArrowBackIosIcon />
                    </div>
                    <p><small>Back</small></p>
                </div>
            </div>

            {/* ################ ROW-3 ################## */}

            <div className="row cpr-rw-3">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <form onSubmit={e => submitForm(e)}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6 col-sm-12 cpr-rw3-col-1">


                                        <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6>Message</h6>
                                                <textarea className="cpr-inputs add-booking-inputs" name="message" placeholder="Message to report" type="text" onChange={e => { setMessage(e.target.value)}} />
                                            </div>

                                        </div>


                                        <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                            <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                                <button className="cpr-approve-btn">Raise Issue</button>
                                            </div>

                                        </div>

                                        <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                            <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                                <button onClick={handleMoveback} type="button" className="cpr-cancel-btn">Cancel</button>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default AddBooking;
