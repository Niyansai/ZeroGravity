import React, { useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';
import API from '../../../../Utils/Utils';
import axios from 'axios';

const AddPackage = () => {

    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[starting_price, setStarting_price] = useState('');
    const[ending_price, setEnding_price] = useState('');
    const[address, setAddress] = useState('');
    const[rating, setRating] = useState('');
    const[capacity, setCapacity] = useState('');
    const[duration, setDuration] = useState('');
    const[loc_lat, setLoc_lat] = useState('');
    const[loc_lng, setLoc_lng] = useState('');
    const[tags, setTags] = useState('');
    const[transport, setTransport] = useState('');
    const[stay, setStay] = useState('');
    const[meal, setMeal] = useState('');
    const[activities, setActivities] = useState('');
    const[special, setSpecial] = useState('');
    const[photos, setPhotos] = useState('');

    const history = useHistory();

    const handleMoveback = () => {
        history.push('/dashboard')
    }

    const submitPackage = (e) => {   

    }

    const sendSubmit = (e) => {

        submitPackage();
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
                <h3>Add Package</h3>
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
                                <form onSubmit={submitPackage}>
                                    <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 cpr-rw3-col-1">


                        <div className="row cpr-rw3-col-1-sub-row-1 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6 >Package Name</h6>
                            <input className="cpr-inputs" name="name" value={name} placeholder="name" type="text" onChange={(e) => {setName(e.target.value)}} />
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-2 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>Description</h6>
                            <input className="cpr-inputs" name="description" value={description} placeholder="description" type="text" onChange={(e) => {setDescription(e.target.value)}} />
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-3 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>starting_price</h6>
                            <input className="cpr-inputs" name="starting_price" value={starting_price} placeholder="starting_price" type="text" onChange={(e) => {setStarting_price(e.target.value)}} />
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-4 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>ending_price</h6>
                            <input className="cpr-inputs" name="ending_price" value={ending_price} placeholder="ending_price" type="text" onChange={(e) => {setEnding_price(e.target.value)}} />
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-5 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>address</h6>
                            <input className="cpr-inputs" name="address" value={address} placeholder="address" type="text" onChange={(e) => {setAddress(e.target.value)}} />
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>rating</h6>
                            <input className="cpr-inputs" name="rating" value={rating} placeholder="rating" type="text" onChange={(e) => {setRating(e.target.value)}} />
                            </div>
                        </div>



                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 cpr-rw3-col-2">

                            <div className="row cpr-rw3-col-2-sub-row-1 cpr-rw3-col-2-sub-rows-all">
                                <div className="col">
                                    <h6>special</h6>
                            <input className="cpr-inputs" name="special" value={special} placeholder="special" type="text" onChange={(e) => {setSpecial(e.target.value)}} />
                                </div>
                            </div>

                            <div className="row cpr-rw3-col-2-sub-row-2 cpr-rw3-col-2-sub-rows-all">
                                <div className="col">
                                <h6>photos</h6>
                            <input className="cpr-inputs" name="photos" value={photos} placeholder="photos" type="text" onChange={(e) => {setPhotos(e.target.value)}} />
                                </div>
                            </div>

                            <div className="row cpr-rw3-col-2-sub-row-3 cpr-rw3-col-2-sub-rows-all">
                            <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                            <h6>capacity</h6>
                            <input className="cpr-inputs" name="capacity" value={capacity} placeholder="capacity" type="text" onChange={(e) => {setCapacity(e.target.value)}} />
                            </div>
                        </div>

                        <div className="row  cpr-rw3-col-2-sub-row-4 cpr-rw3-col-2-sub-rows-all">
                            <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                            <h6>duration</h6>
                            <input className="cpr-inputs" name="duration" value={duration} placeholder="duration" type="text" onChange={(e) => {setDuration(e.target.value)}} />
                            </div>
                        </div>

                        <div className="row  cpr-rw3-col-2-sub-row-5 cpr-rw3-col-2-sub-rows-all">
                            <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                            <h6>loc_lat</h6>
                            <input className="cpr-inputs" name="loc_lat" value={loc_lat} placeholder="loc_lat" type="text" onChange={(e) => {setLoc_lat(e.target.value)}} />
                            </div>
                        </div>

                        <div className="row  cpr-rw3-col-2-sub-row-6 cpr-rw3-col-2-sub-rows-all">
                            <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                            <h6>loc_lng</h6>
                            <input className="cpr-inputs" name="loc_lng" value={loc_lng} placeholder="loc_lng" type="text" onChange={(e) => {setLoc_lng(e.target.value)}} />
                            </div>
                        </div>

                        <div className="row  cpr-rw3-col-2-sub-row-7 cpr-rw3-col-2-sub-rows-all">
                            <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                            <h6>Tags</h6>
                            <input className="cpr-inputs" name="tags" value={tags} placeholder="tags" type="text" onChange={(e) => {setTags(e.target.value)}} />
                            </div>
                        </div>

                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 cpr-rw3-col-3">
                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <h6>transport</h6>
                            <input className="cpr-inputs" name="transport" value={transport} placeholder="transport" type="text" onChange={(e) => {setTransport(e.target.value)}} />
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <h6>stay</h6>
                            <input className="cpr-inputs" name="stay" value={stay} placeholder="stay" type="text" onChange={(e) => {setStay(e.target.value)}} />
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <h6>meal</h6>
                            <input className="cpr-inputs" name="meal" value={meal} placeholder="meal" type="text" onChange={(e) => {setMeal(e.target.value)}} />>
                                
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <h6>activites</h6>
                            <input className="cpr-inputs" name="activities" value={activities} placeholder="activities" type="text" onChange={(e) => {setActivities(e.target.value)}} />
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <button className="cpr-approve-btn">Approve</button>
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <button onClick={sendSubmit} className="cpr-cancel-btn">Cancel</button>
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

export default AddPackage;
