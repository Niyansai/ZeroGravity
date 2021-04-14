import React from 'react'
import PaymentCards from './PaymentCards/PaymentCards';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./styles.css";

const PaymentsPage = () => {

    return (
        <div style={{padding:"2rem", paddingLeft: "4rem"}} className="container-fluid payments-container">

            {/* ############ LINE DIVIDER ########### */}

            <div className="row head-diveder-lin-pkg-row">
                <div className="col">
                    <div className="head-diveder-lin-pkg">

                    </div>
                </div>
            </div>

             {/* ############ ROW-2  ########### */}

             <div style={{marginTop: "2rem"}} className="row">

                 <div className="col-lg-1 col-md-6 col-sm-12">
                     <h6>Payments</h6>
                 </div>
                 <div className="col-lg-2 col-md-6 col-sm-12">
                     <p style={{color: "gray", fontSize: "16px"}}>Package to Goa (4D/5N)</p>
                 </div>
                 <div style={{textAlign:"-webkit-right"}} className="col-lg-6 col-md-6 col-sm-12">
                     <ArrowBackIcon/>
                 </div>

             </div>

                          {/* ############ ROW-3  ########### */}

                          <div style={{ marginBottom: "1rem"}} className="row">

                    <div className="col">
                        <p style={{color: "gray", fontSize: "12px"}}>Choose a Payment Method Below</p></div>

                    </div>

                    {/* ############ ROW-3  ########### */}

                          <div style={{ marginBottom: "1rem"}} className="row">

                    <div className="col-lg-3 col-md-6 col-sm-12">
                            <PaymentCards/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <PaymentCards/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <PaymentCards/>
                        </div>

                    </div>

                        {/* ############ ROW-4  ########### */}

                        <div style={{ marginBottom: "1rem"}} className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">

                                    <div style={{ marginTop: "1rem"}} className="row">
                                            <div className="col">
                                            <h6 style={{ marginBottom: "1rem"}}>Billing Info</h6>
                                      
                                                </div>
                                                </div> 
                                        <div  style={{fontSize: "16px"}} className="row">
                                            <div className="col">
                                            <p>Full Name</p>
                                        <input style={{border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem"}} className="inputs-payment" placeholder="Sharma Singh" type="text"/>
                                                </div>
                                                </div>   
                                                <div className="row">
                                            <div className="col">
                                            <p>Billing Address line 1</p>
                                            <input style={{border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem"}} className="inputs-payment" placeholder="Sharma Singh" type="text"/>
                                                </div>
                                                </div> 
                                                <div className="row">
                                            <div className="col">
                                            <p>City</p>
                                            <input style={{border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem"}} className="inputs-payment" placeholder="Sharma Singh" type="text"/>
                                                </div>
                                                </div> 
                                    </div>
                                    <div style={{ marginTop: "auto"}} className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="row">
                                            <div className="col">
                                            <p>Billing Address line 2</p>
                                            <input style={{border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem"}} className="inputs-payment" placeholder="Hyderabad@yahoo.com" type="text"/>
                                                </div>
                                                </div> 
                                                <div className="row">
                                            <div className="col">
                                            <p>Pincode</p>
                                            <input style={{border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem"}} className="inputs-payment" placeholder="Enter Pin Code" type="text"/>
                                                </div>
                                                </div>     
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">

                                    <div style={{ marginTop: "1rem"}} className="row">
                                            <div className="col">
                                            <h6 style={{ marginBottom: "1rem"}}>Card Details</h6>
                                      
                                                </div>
                                                </div> 
                                        <div  style={{fontSize: "16px"}} className="row">
                                            <div className="col">
                                            <p>Name On Card</p>
                                        <input style={{border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem"}} className="inputs-payment" placeholder="Sharma Singh" type="text"/>
                                                </div>
                                                </div>    
                                                <div className="row">
                                            <div className="col">
                                            <p>Expiry(mm/yy)</p>
                                            <input style={{border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem"}} className="inputs-payment" placeholder="05/19" type="text"/>
                                                </div>
                                                </div> 
                                    </div>
                                    <div style={{ marginTop: "auto"}} className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="row">
                                            <div className="col">
                                            <p>Card Number</p>
                                            <input style={{border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem"}} className="inputs-payment" placeholder="12483882898298298" type="text"/>
                                                </div>
                                                </div> 
                                                <div className="row">
                                            <div className="col">
                                            <p>CVV</p>
                                            <input style={{border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem"}} className="inputs-payment" placeholder="Enter CVV" type="password"/>
                                                </div>
                                                </div>    

                                                
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* ############ ROW-5  ########### */}

                         <div style={{ marginBottom: "1rem"}} className="row">
                                                    <div className="col"></div>
                                                    <div className="col"></div>
                                                    <div className="col">
                                                        <h4><small>Total:</small>15,000/-</h4>
                                                    </div>

                                                    <div className="col">
                                                        <button style={{background:"#ff4f4f", border: "none", width: "70%", padding: "5px", color: "white"}}>Proceed</button>
                                                    </div>
                                                   
                         </div>



            
        </div>
    )
}

export default PaymentsPage
