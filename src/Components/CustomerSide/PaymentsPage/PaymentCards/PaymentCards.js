import React from 'react';
import "./styles.css";


const PaymentCards = ({img}) => {

    console.log(img)
    return (
        <div className="container-fluid">

            <div style={{border: "2px solid #ff4f4f", padding: "2rem", paddingTop: "4rem", height: "180px", boxShadow:"1px 2px 3px 1px rgba(0,0,0,0.5)"}} className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                   <img style={{height: "30px"}} src={img} alt=""/> 
                </div>
            </div>

            
        </div>
    )
}

export default PaymentCards
