import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PaymentCards from './PaymentCards/PaymentCards';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./styles.css";
import upi from './../../../Assets/upi.svg'
import visa from './../../../Assets/Visa.svg'
import axios from 'axios';
import API from '../../../Utils/Utils';

const PaymentsPage = () => {
    const { id, name } = useParams();
    const history = useHistory();

    const [username, setUserName] = useState("");
    const [address1, setAddressLine1] = useState("");
    const [address2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [coupon, setCoupon] = useState("");
    const [cvv, setCvv] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [user, setUser] = useState("");
    const [payment_mode, setMode] = useState("");
    const [price, setPrice] = useState("");
    const [extra, setExtra] = useState("");

    const booking = { user, bookingDate, payment_mode, price, coupon, extra };

    const back = () => {
        history.push("/packages");
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

        booking.user = sessionStorage.getItem("id");
        booking.package = id;
        booking.payment_mode = "online";
        booking.extra = [
            username,
            address1 + " " + address2,
            city,
            pincode,
            nameOnCard,
            cardNumber,
            cardExpiry,
            cvv
        ]

        console.log(booking)
        axios.post(API.ADD_BOOKING,
            booking, {
            headers: headers
        })
            .then((resp) => {
                if ('message' in resp.data) {
                    alert(resp.data.message);

                    history.push('/dashboard');
                }
                else {
                    alert("Something went wrong");
                }
            })
            .catch((err) => {
                console.log(err)
                if (err.response.status === 500) {
                    alert("Please check all values again!")
                }
                if (err.response.status === 401) {
                    history.push("/dashboard");
                }
            });
    }

    return (
        <div style={{ padding: "2rem", paddingLeft: "4rem" }} className="container-fluid payments-container">

            {/* ############ LINE DIVIDER ########### */}

            <div className="row head-diveder-lin-pkg-row">
                <div className="col">
                    <div className="head-divider-lin-pkg">

                    </div>
                </div>
            </div>

            {/* ############ ROW-2  ########### */}

            <div style={{ marginTop: "2rem" }} className="row">

                <div className="col-lg-1 col-md-6 col-sm-12">
                    <h6>Payments</h6>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <p style={{ color: "gray", fontSize: "16px" }}>{name}</p>
                </div>
                <div onClick={back} style={{ textAlign: "-webkit-right" }} className="col-lg-6 col-md-6 col-sm-12">
                    <ArrowBackIcon  />
                </div>

            </div>

            {/* ############ ROW-3  ########### */}

            <div style={{ marginBottom: "1rem" }} className="row">

                <div className="col">
                    <p style={{ color: "gray", fontSize: "12px" }}>Choose a Payment Method Below</p></div>

            </div>

            {/* ############ ROW-3  ########### */}

            <div style={{ marginBottom: "1rem" }} className="row">

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <PaymentCards img={visa} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <PaymentCards img={upi} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <PaymentCards />
                </div>

            </div>

            {/* ############ ROW-4  ########### */}

            <div style={{ marginBottom: "1rem" }} className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">

                            <div style={{ marginTop: "1rem" }} className="row">
                                <div className="col">
                                    <h6 style={{ marginBottom: "1rem" }}>Billing Info</h6>

                                </div>
                            </div>
                            <div style={{ fontSize: "16px" }} className="row">
                                <div className="col">
                                    <p>Full Name</p>
                                    <input onChange={(e) => { setUserName(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="your name" type="text" />
                                </div>
                            </div>


                            <div className="row">
                                <div className="col">
                                    <p>Billing Address line 1</p>
                                    <input onChange={(e) => { setAddressLine1(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="address line 1" type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>City</p>
                                    <input onChange={(e) => { setCity(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="city name" type="text" />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "auto" }} className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col">
                                    <p>Billing Address line 2</p>
                                    <input onChange={(e) => { setAddressLine2(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="address line 2" type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Pincode</p>
                                    <input onChange={(e) => { setPincode(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="enter pin code" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">

                            <div style={{ marginTop: "1rem" }} className="row">
                                <div className="col">
                                    <h6 style={{ marginBottom: "1rem" }}>Card Details</h6>

                                </div>
                            </div>
                            <div style={{ fontSize: "16px" }} className="row">
                                <div className="col">
                                    <p>Name On Card</p>
                                    <input onChange={(e) => { setNameOnCard(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="name on the card" type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Expiry(mm/yy)</p>
                                    <input onChange={(e) => { setCardExpiry(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="05/25" type="text" />
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: "auto" }} className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col">
                                    <p>Card Number</p>
                                    <input onChange={(e) => { setCardNumber(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="1248 3882 8982 9829" type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>CVV</p>
                                    <input onChange={(e) => { setCvv(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="enter CVV" type="password" />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*  */}
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">

                            <div style={{ marginTop: "1rem" }} className="row">
                                <div className="col">
                                    <h6 style={{ marginBottom: "1rem" }}>Final Details</h6>

                                </div>
                            </div>
                            <div style={{ fontSize: "16px" }} className="row">
                                <div className="col">
                                    <p>Coupon Code</p>
                                    <input onChange={(e) => { setCoupon(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="coupon code" type="text" />
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: "auto" }} className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col">
                                    <p>Booking Date</p>
                                    <input onChange={(e) => { setBookingDate(e.target.value) }} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="enter boarding date" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}





                </div>

            </div>

            {/* ############ ROW-5  ########### */}

            <div style={{ marginBottom: "1rem" }} className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                    <h4><small>Total:</small>15,000/-</h4>
                </div>

                <div className="col">
                    <button type="submit" onClick={(e) => {submitForm(e)}} style={{ background: "#ff4f4f", border: "none", width: "70%", padding: "5px", color: "white" }}>Proceed</button>
                </div>

            </div>




        </div>
    )
}

export default PaymentsPage
