import React from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';

const CustomPackageRequest = () => {

    const history = useHistory();

    const handleMoveback = () => {
        history.push('./admin')
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
                <h3>Custom Package <br/>Request</h3>
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

               <div className="col-lg-3 col-md-6 col-sm-12 cpr-rw3-col-1">


               <div className="row cpr-rw3-col-1-sub-row-1 cpr-rw3-col-1-sub-rows-all">
                   <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                    <h6>Name</h6>
                    <input className="cpr-inputs" placeholder="Sharma Singh" type="text"/>
                   </div>
               </div>
               
               <div className="row cpr-rw3-col-1-sub-row-2 cpr-rw3-col-1-sub-rows-all">
                   <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                    <h6>Email</h6>
                    <input className="cpr-inputs" placeholder="noname@yahoo.com" type="text"/>
                   </div>
               </div>

               <div className="row cpr-rw3-col-1-sub-row-3 cpr-rw3-col-1-sub-rows-all">
                   <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                    <h6>Phone</h6>
                    <input className="cpr-inputs" placeholder="+91 8945393030" type="text"/>
                   </div>
               </div>

               <div className="row cpr-rw3-col-1-sub-row-4 cpr-rw3-col-1-sub-rows-all">
                   <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                    <h6>Destination</h6>
                    <input className="cpr-inputs" placeholder="hyderabad" type="text"/>
                   </div>
               </div>

               <div className="row cpr-rw3-col-1-sub-row-5 cpr-rw3-col-1-sub-rows-all">
                   <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                    <h6>Departure Location</h6>
                    <input className="cpr-inputs" placeholder="Hyderabad" type="text"/>
                   </div>
               </div>

               <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                   <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                    <h6>Departure date</h6>
                    <input className="cpr-inputs" placeholder="21-June-2021" type="text"/>
                   </div>
               </div>



               </div>

               <div className="col-lg-3 col-md-6 col-sm-12 cpr-rw3-col-2">

                   <div className="row cpr-rw3-col-2-sub-row-1 cpr-rw3-col-2-sub-rows-all">
                       <div className="col">
                          <p>Number of People</p> 
                       </div>
                       <div className="col">
                           <p>05</p>
                       </div>
                   </div>

                   <div className="row cpr-rw3-col-2-sub-row-2 cpr-rw3-col-2-sub-rows-all">
                       <div className="col">
                          <p>Number of Days</p> 
                       </div>
                       <div className="col">
                           <p>05</p>
                       </div>
                   </div>

                   <div className="row cpr-rw3-col-2-sub-row-3 cpr-rw3-col-2-sub-rows-all">
                   <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                    <h6>Type of Stay</h6>
                    <input className="cpr-inputs" placeholder="Hostel" type="text"/>
                   </div>
               </div>

               <div className="row  cpr-rw3-col-2-sub-row-4 cpr-rw3-col-2-sub-rows-all">
                   <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                    <h6>Stay Preference</h6>
                    <input className="cpr-inputs" placeholder="3 Sharing" type="text"/>
                   </div>
               </div>

               <div className="row  cpr-rw3-col-2-sub-row-5 cpr-rw3-col-2-sub-rows-all">
                   <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                    <h6>Cuisine Preferences</h6>
                    <input className="cpr-inputs" placeholder="South Indian" type="text"/>
                   </div>
               </div>

               <div className="row  cpr-rw3-col-2-sub-row-6 cpr-rw3-col-2-sub-rows-all">
                   <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                    <h6>Meal Preferences</h6>
                    <input className="cpr-inputs" placeholder="Vegetarian" type="text"/>
                   </div>
               </div>

               <div className="row  cpr-rw3-col-2-sub-row-7 cpr-rw3-col-2-sub-rows-all">
                   <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                    <h6>Meal Frequency</h6>
                    <input className="cpr-inputs" placeholder="Breakfast + Dinner" type="text"/>
                   </div>
               </div>

               </div>

               <div className="col-lg-3 col-md-6 col-sm-12 cpr-rw3-col-3">
                   <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                       <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                       <h6>Mode Of Transport ( to Destination )</h6>
                        <input className="cpr-inputs" placeholder="Flight" type="text"/>
                       </div>

                   </div>

                   <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                       <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                       <h6>Mode of Transport ( in Trip )</h6>
                        <input className="cpr-inputs" placeholder="Bus" type="text"/>
                       </div>

                   </div>

                   <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                       <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                       <h6>Activites Required</h6>
                        <p>Hiking <span><br/>Water Sports</span></p>
                        
                       </div>

                   </div>

                   <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                       <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                       <h6>Special Needs Assistance</h6>
                       <p>Wheelchair</p>
                       </div>

                   </div>

                   <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                       <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                       <button className="cpr-approve-btn">Approve</button>
                       </div>

                   </div>

                   <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                       <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                       <button className="cpr-cancel-btn">Cancel</button>
                       </div>

                   </div>


                   

               </div>

               <div className="col-lg-3 col-md-6 col-sm-12 cpr-rw3-col-4 EMPTY_COLUMN">

                </div>

               </div> 
        </div>
    )
}

export default CustomPackageRequest;
