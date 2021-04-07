import React, { useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';
import API from '../../../../Utils/Utils';
import axios from 'axios';
import { Link } from 'react-router-dom';




const AddBooking = () => {

    const [booking, setBooking] = useState({

        user: "", 
        packaging:"", 
        payment_mode:"", 
        price:"", 
        coupon:"", 
        status:"", 
        transaction:"", 
        extras: ""

    });

   
    const { user, packaging, payment_mode, price, coupon, status, transaction, extras } = booking;

    const onInputChange = e => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };

   

    const history = useHistory();

    const handleMoveback = () => {
        history.push('/bookings')
    }


    const submitForm = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        console.log("token")
        if (token == null) {
          history.push("/bookings");
          return;
        }
    
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
    
        axios.post(API.ADD_BOOKING,
          booking, {
          headers: headers
        })
        .then((resp) => {
            console.log(resp)
            if ('message' in resp.data) {
              alert(resp.data.message);
              history.push('/packages');
            }
            else {
              alert("Something went wrong");
            }
          })
          .catch((err) => {
            if (err.response.status === 500) {
              alert("Package information is already available.");
            }
            if (err.response.status === 401) {
              history.push("/home");
            }
          });
    
    
      }
    

   
    
    return (

        <div className="container cpr-cntnr">


            {/* ################ ROW-1 ################## */}

           <div className="row cpr-rw-1">

                <div className="col-lg-10 col-md-6 col-sm-12 cpr-rw1-col-1">

                        <img className="img-fluid cpr-rw1-col-1-logo" src={GravityLogo} alt=""/>
                                           
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 cpr-rw1-col-2">
                <Avatar src={RealProfilePic}/>
                <p style={{marginLeft: "1rem", fontSize: "12px"}}>Ram Singh <br/><span><small>Logout</small></span></p>

                </div>

               </div> 

                {/* ################ ROW-2 ################## */}
                
           <div className="row cpr-rw-2">

                <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
                <h3>Add Booking</h3>
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


                        <div className="row cpr-rw3-col-1-sub-row-1 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6 >User</h6>
                            <input className="cpr-inputs add-booking-inputs" name="user" value={user} placeholder="user" type="text" onChange={e => onInputChange(e)}/>
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-2 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>Package</h6>
                            <input className="cpr-inputs add-booking-inputs" name="packaging" value={packaging} placeholder="package" type="text" onChange={e => onInputChange(e)}/>
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-3 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only mb-3 d-block">
                            <h6>Payment Mode</h6>
                            <select className="cpr-inputs add-booking-inputs bokng-input-toggle form-select" name="payment_mode" value={payment_mode} placeholder="starting_price" type="text" onChange={e => onInputChange(e)}>
                            <option selected>Online</option>
                            <option value="1">Offline</option>
                                </select>
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-4 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>Price</h6>
                            <input className="cpr-inputs add-booking-inputs" name="price" value={price} placeholder="price" type="text" onChange={e => onInputChange(e)}/>
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-5 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>Coupon</h6>
                            <input className="cpr-inputs add-booking-inputs" name="coupon" value={coupon} placeholder="Coupon" type="text" onChange={e => onInputChange(e)}/>
                            </div>
                           
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>Status</h6>
                            <input className="cpr-inputs add-booking-inputs" name="status" value={status} placeholder="Status" type="text" onChange={e => onInputChange(e)}/>
                            </div>
                            
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>Transaction</h6>
                            <input className="cpr-inputs add-booking-inputs" name="transaction" value={transaction} placeholder="Transaction" type="text" onChange={e => onInputChange(e)}/>
                            </div>
                            
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>Extras</h6>
                            <input className="cpr-inputs add-booking-inputs" name="extras" value={extras} placeholder="Extras" type="text" onChange={e => onInputChange(e)}/>
                            </div>
                            
                        </div>

                            

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <button className="cpr-approve-btn">Approve</button>
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <button type="submit" className="cpr-cancel-btn">Cancel</button>
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
