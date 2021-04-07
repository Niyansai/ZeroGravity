import React, { useEffect, useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, useParams } from 'react-router-dom';
import API from '../../../../Utils/Utils';
import axios from 'axios';
import { ContactlessOutlined } from '@material-ui/icons';



const AddCoupon = () => {

    const history = useHistory();

    const [coupon, setCoupon] = useState({
        code: "",
        discount: "",
        expired: ""
    });

    const { code, discount, expired } = coupon;

    const onInputChange = e => {
        setCoupon({ ...coupon, [e.target.name]: e.target.value });
    };



    // ################### POST UPDATED FORM SUBMIT #####################

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

        axios.post(API.ADD_COUPON,
            coupon, {
            headers: headers
        }
        )
            .then((resp) => {
                if ('message' in resp.data) {
                    alert(resp.data.message);
                    if (resp.data.status == 1)
                        history.push('/coupons');
                }
            })
            .catch((err) => {
                if (err.response.status === 500) {
                    alert("Coupon information is already available.");
                }
                if (err.response.status === 401) {
                    history.push("/home");
                }
            });

    }



    // ############################# OnClick Handlers ###############################

    const handleMoveback = () => {
        history.push('/coupons')
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
                    <p style={{ marginLeft: "1rem", fontSize: "12px" }}> {sessionStorage.getItem("user")} <br /><span><small>Logout</small></span></p>

                </div>

            </div>

            {/* ################ ROW-2 ################## */}

            <div className="row cpr-rw-2">

                <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
                    <h3>New Coupon</h3>
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
                        <div className="col">
                            <form onSubmit={e => submitForm(e)}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 cpr-rw2-col-1">


                                        <div className="row cpr-rw3-col-1-sub-row-1 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6 >Code</h6>
                                                <input className="cpr-inputs"
                                                    name="code"
                                                    placeholder="code"
                                                    type="text"
                                                    onChange={e => onInputChange(e)} required
                                                />
                                            </div>
                                        </div>

                                        <div className="row cpr-rw3-col-1-sub-row-2 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6>Discount</h6>
                                                <input className="cpr-inputs"
                                                    name="discount"
                                                    placeholder="discount"
                                                    type="number"
                                                    onChange={e => onInputChange(e)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row cpr-rw3-col-1-sub-row-3 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6>Expired</h6>
                                                <input className="cpr-inputs"
                                                    name="expired"
                                                    placeholder="true/ false"
                                                    type="text"
                                                    onChange={e => onInputChange(e)}
                                                />
                                            </div>
                                        </div>


                                    </div>


                                    <div className="col-lg-6 col-md-6 col-sm-12 cpr-rw2-col-2">



                                        <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                            <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                                <button type="submit" className="cpr-approve-btn">Add Coupon</button>
                                            </div>

                                        </div>

                                        <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                            <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                                <button onClick={() => history.push('/coupons')} type="cancel" className="cpr-cancel-btn">Cancel</button>

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

export default AddCoupon;
