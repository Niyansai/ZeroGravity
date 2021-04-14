import React from 'react';
import "./styles.css";
import mastercard from "../../../../Assets/mastercard.png";
import Visa from "../../../../Assets/Visa.svg";


const PaymentCards = () => {

    return (
        <div className="container-fluid">

            <div style={{border: "2px solid #ff4f4f", padding: "2rem", paddingTop: "4rem", height: "180px", boxShadow:"1px 2px 3px 1px rgba(0,0,0,0.5)"}} className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                   <img style={{height: "30px"}} src={mastercard} alt=""/> 
                   <div></div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img style={{height: "30px"}} src={Visa} alt=""/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <p style={{fontSize: "12px"}}>Debit/Credit <br/>Card</p>
                </div>
            </div>

            
        </div>
    )
}

export default PaymentCards
