import React from 'react';
import "./styles.css";
import GravityLogo from '../../../../Assets/GravityLogo.png'
import { Avatar } from '@material-ui/core';
import RealProfilePic from  '../../../../Assets/ProfileReal.jpeg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import img2 from '../../../../Assets/img2.png';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import HotelIcon from '@material-ui/icons/Hotel';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import CommuteIcon from '@material-ui/icons/Commute';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import { useHistory, useParams } from 'react-router-dom';



const EditPackage = () => {

    const history = useHistory();
    const { id } = useParams();

    const packagesEdit = { id }

    const handleMoveBack = (e) => {

        history.push('/dashboard');

    }



    return (
        
        <div className="container ep-container">

            {/* ################ ROW-1 ################ */}

            <div className="row ed-rows-all ed-row-1">
                <div className="col-lg-6 col-md-6 col-sm-12 ed-row-1-col-1">
                <img className="ep-logo" src={GravityLogo} alt=""/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 ed-row-1-col-2">
                    <Avatar src={RealProfilePic}/>
                    <p>Ram Singh <br/><span><small>Logout</small></span></p>
                </div>

            </div>

              {/* ################ ROW-2 ################ */}

              <div className="row ed-rows-all ed-row-2">

                  <div className="col-lg-11 col-md-11 col-sm-12 ed-row-2-col-all ed-row-2-col-1">
                      <h6>Highlights</h6>
                      <h6>Inclusions</h6>                 
                            <h6>How it Works</h6>
                                <h6>Itinerary</h6>                
                            <h6>Overview<br/><div className="ed-hglt-divider"></div></h6>
                                <h6>FAQ's</h6>
                      </div>
                  <div className="col-lg-1 col-md-1 col-sm-12 ed-row-2-col-all ed-row-2-col-4">
                         <div onClick={handleMoveBack} className="bg-black-bck-arw cpr-back-arrow">
                            <ArrowBackIosIcon />                     
                    </div>
                     <p><small>Back</small></p>

                  </div>

                </div>

                {/* ################ ROW-3 ################ */}

                <div className="row ed-rows-all ed-row-3">


                    <div className="col-lg-6 col-md-6 col-sm-12 ed-row-3-col-1">

                        <div className="row ed-r3-srw-all ed-row-3-col-1-sub-row-1">

                            <div className="col-lg-6 col-md-6 col-sm-12 ed-row-3-col-1-sub-row-1-c1">
                                <div className="img-top-text-icon">
                                <CameraAltIcon/>
                                <p style={{fontSize: "12px"}}>Upload Photo</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ed-row-3-col-1-sub-row-1-c2">

                            <div className="img-top-text-icon">
                                <CameraAltIcon/>
                                <p style={{fontSize: "12px"}}>Upload Photo</p>
                                </div>
                                
                            </div>                       

                        </div>

                        <div className="row ed-r3-srw-all ed-row-3-col-1-sub-row-2">

                                <div className="col-lg-6 col-md-6 col-sm-12 ed-row-3-col-1-sub-row-2-c1">
                                    <div className="img-top-text-icon">
                                    <CameraAltIcon/>
                                    <p style={{fontSize: "12px"}}>Upload Photo</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 ed-row-3-col-1-sub-row-2-c2">

                                <div className="img-top-text-icon">
                                    <CameraAltIcon/>
                                    <p style={{fontSize: "12px"}}>Upload Photo</p>
                                    </div>
                                    
                                </div>

                                    </div>


                                    <div className="row ed-r3-srw-all ed-row-3-col-1-sub-row-3">

                                        <h6>Highlights <span><AddCircleOutlinedIcon/></span></h6>
                                        <div className="row">
                                            <div className="col-lg-1">
                                                <div className="five-lines"></div>
                                                <div className="five-lines"></div>
                                                <div className="five-lines"></div>
                                                <div className="five-lines"></div>
                                                <div className="five-lines"></div>
                                            </div>
                                            <div className="col-lg-8 lorem-text-col">

                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur in aspernatur neque nesciunt blanditiis provident pariatur quaerat dolor quasi officia? Quidem dolor reiciendis nisi quibusdam. Molestiae amet quam reiciendis quos.
                                                Facilis similique sit explicabo, corporis architecto officia at blanditiis repellat commodi modi natus dicta quam aut vero dolorum! Ab, sapiente quod magni accusamus cupiditate sed quaerat quidem repellat. Illum, numquam?
                                                tiis. Ut nemo rerum necessitatibus  eligendi sapiente culpa doloremque cupiditate blanditiis. Ut nemo rerum necessitatibus. </p>

                                            </div>
                                        </div>


                                    </div>

                                    <div className="row ed-r3-srw4-all ed-row-3-col-1-sub-row-4">

                                        <h5>Inclusions</h5>

                                        <div className="col-lg-3 col-md-4 col-sm-12 ed-row-3-col-1-sub-row-4-col-1">
                                           <p><HotelIcon/> <span><b className="icon-beside-r3-srw4">Hotels</b></span></p> 
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-12 ed-row-3-col-1-sub-row-4-col-2">
                                           <p><RestaurantMenuIcon/> <span><b className="icon-beside-r3-srw4">Meals</b></span></p> 
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-12 ed-row-3-col-1-sub-row-4-col-3">
                                           <p><CommuteIcon/> <span><b className="icon-beside-r3-srw4">Transport</b></span></p> 
                                        </div>

                                    </div>

                                    <div className="row ed-r3-srw4-all ed-row-3-col-1-sub-row-5">


                                        <div className="col-lg-3 col-md-4 col-sm-12 ed-row-3-col-1-sub-row-5-col-1">
                                           <div className="ash-circle"> <span><b className="icon-beside-r3-srw4 ash-circle-txt">Item</b></span></div> 
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-12 ed-row-3-col-1-sub-row-5-col-2">
                                           <div className="ash-circle"><span><b className="icon-beside-r3-srw4 ash-circle-txt">Item</b></span></div> 
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-12 ed-row-3-col-1-sub-row-5-col-3">
                                           <div className="ash-circle"><span><b className="icon-beside-r3-srw4 ash-circle-txt">Item</b></span></div> 
                                        </div>

                                    </div>

                                    
                                    <div className="row ed-r3-srw4-all ed-row-3-col-1-sub-row-6">


                                        <div className="col-lg-3 col-md-4 col-sm-12 ed-row-3-col-1-sub-row-6-col-1">
                                           <div className="ash-circle"> <span><b className="icon-beside-r3-srw4 ash-circle-txt">Item</b></span></div> 
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-12 ed-row-3-col-1-sub-row-6-col-2">
                                           <div className="ash-circle"><span><b className="icon-beside-r3-srw4 ash-circle-txt">Item</b></span></div> 
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-12 ed-row-3-col-1-sub-row-6-col-3">
                                           <div className="ash-circle"><span><b className="icon-beside-r3-srw4 ash-circle-txt">Item</b></span></div> 
                                        </div>

                                    </div>

                                    <div className="row ed-r3-srw4-all ed-row-3-col-1-sub-row-7">

                                        <h5>Itenerary</h5>
                                        <div className="col-lg-2 col-md-4 col-sm-6 itener-down-text">Day 1<div className="hightlight-day-1"></div></div>
                                        <div className="col-lg-2 col-md-4 col-sm-6 itener-down-text">Day 2</div>
                                        <div className="col-lg-2 col-md-4 col-sm-6 itener-down-text">Day 3</div>
                                        <div className="col-lg-2 col-md-4 col-sm-6 ed-row-3-col-1-sub-row-7-icons"><AddCircleTwoToneIcon/><span><DeleteForeverIcon/></span></div>

                                    </div>

                                    <div className="row ed-r3-srw4-all ed-row-3-col-1-sub-row-8">
                                        <div className="col activity-col-only">
                                        <p>Activities <span><AddCircleTwoToneIcon/></span></p>
                                        </div>
                                        
                                    </div>

                                    <div className="row ed-r3-srw4-all ed-row-3-col-1-sub-row-9">
                                        <div className="col-lg-5 col-md-12 col-sm-12 srw-9-col-only">
                                            <div className="row sub-row-9-srw-1">
                                                <div className="col-lg-4 col-md-3 col-sm-6">
                                                <p style={{fontSize:"12px"}}>Activity 1</p>
                                                </div>
                                                <div className="col-lg-2 col-md-3 col-sm-6 sw9-delete-icon">
                                                <DeleteForeverIcon/>
                                                </div>
                                            </div>
                                            <div className="row sub-row-9-srw-2">
                                                <div className="col">

                                                <input className="sub-row-9-inputs" placeholder="Tour of the hotel" type="text"/>

                                                </div>                                              
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12 col-sm-12 upload-round-circle-column">
                                            <div className="upload-photo-circle">
                                        <input type="file" id="actual-btn" hidden/>                                         
                                        <label className="camera-icon-under-circle" for="actual-btn"> <CameraAltIcon /> <br/> Upload Photo</label>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="row ed-r3-srw4-all ed-row-3-col-1-sub-row-10">
                                        <div className="col-lg-5 col-md-12 col-sm-12 srw-9-col-only">
                                            <div className="row sub-row-9-srw-1">
                                                <div className="col-lg-4 col-md-3 col-sm-6">
                                                <p style={{fontSize:"12px"}}>Activity 2</p>
                                                </div>
                                                <div className="col-lg-2 col-md-3 col-sm-6 sw9-delete-icon">
                                                <DeleteForeverIcon/>
                                                </div>
                                            </div>
                                            <div className="row sub-row-9-srw-2">
                                                <div className="col">

                                                <input className="sub-row-9-inputs" placeholder="Marketplace Visit" type="text"/>

                                                </div>                                              
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12 col-sm-12 upload-round-circle-column">
                                            <div className="upload-photo-circle">
                                        <input type="file" id="actual-btn" hidden/>                                         
                                        <label className="camera-icon-under-circle" for="actual-btn"> <CameraAltIcon /> <br/> Upload Photo</label>
                                        </div>
                                        </div>
                                    </div>
                    </div>


                    {/* ########################### ROW 3 MAIN COL-2 RIGHT ########################### */}


                    <div className="col-lg-6 col-md-6 col-sm-12 ed-row-3-col-2">

                        <div className="row er3c2-srws er3c2-srw-1 row-title-GTrip">
                            <div className="col-lg-12 col-md-12 col-sm-12 row-title-GTrip-col-only">
                            <h3>Gokharna Trip <span><EditIcon/></span></h3><hr/>
                            </div>

                        </div>

                        <div className="row er3c2-srws er3c2-srw-2">
                            <div className="col-lg-4 col-md-4 col-sm-12 three-dlts-txt-row-cAll three-dlts-txt-row-c1">
                                <p>Adventure<soan><DeleteForeverIcon/></soan></p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 three-dlts-txt-row-cAll three-dlts-txt-row-c2">
                            <p>Hills<soan><DeleteForeverIcon/></soan></p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 three-dlts-txt-row-cAll three-dlts-txt-row-c3">
                            <p>Hiking<soan><DeleteForeverIcon/></soan></p>
                            </div>
                        </div>

                        <div className="row er3c2-srws er3c2-srw-2">

                            <div className="col-lg-4 col-md-4 col-sm-12 romantic-text">

                                    <input className="romantic-txt-inpt" placeholder="Romantic" type="text"/>
                                    <AddCircleTwoToneIcon/>
                            </div>
                        </div>

                        <div className="row er3c2-srws er3c2-srw-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 er3c2-srw-3-col-only">
                            <p>From</p>
                            <input className="number-txt-inpt" placeholder="15,000" type="text"/><span><EditIcon/></span>
                            </div>                       
                            
                        </div>

                        <div className="row er3c2-srws er3c2-srw-4">

                            <div className="col-lg-12 col-md-12 col-sm-12 er3c2-srw-4-col-only">
                                <h5>Overview</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt pariatur eveniet aliquid sint unde totam officiis voluptas. Ea minus similique quisquam cum libero aut velit illo numquam tenetur! Nostrum, cupiditate.
                                istinctio. Dolores, tinctio Dolores architecto!</p>
                            </div>

                        </div>

                        <div className="row er3c2-srws er3c2-srw-5">

                            <div className="col-lg-12 col-md-12 col-sm-12 er3c2-srw-5-col-only">
                                <h5>How It Works</h5>
                                <ol className="olist-font-size">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit tenetur dolorum earum t aperiam laborum?
                                </li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit tenetur dolorum earum t aperiam laborum?
                                </li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit tenetur dolorum earum t aperiam laborum?
                                </li>
                                </ol>
                            </div>

                        </div>

                        <div className="row er3c2-srws er3c2-srw-6">


                            <div className="col er3c2-srw-6-col-only">
                                <h5>FAQS <span><AddCircleTwoToneIcon/></span></h5>
                            </div>
                        </div>

                        <div className="row er3c2-srws er3c2-srw-7">
                        <div className="col er3c2-srw-7-col-only">
                            <div className="question-circle">
                               <span className="question">?</span>
                            </div>
                            <span className="question-lorem-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat nulla assumenda sequi necessitatibus vero ab quisquam mollitia pariatur est? Corrupti quis ut, molestiae est assumenda facilis obcaecati odio magni?
                                Sequi commodi quos fuga vel consequuntur repellendus temporibus quia cumque, necessitatibus delectus iste, aperiam at quisquam a itaque nam atque maiores repellat quis vero qui omnis. Maiores eligendi perspiciatis necessitatibus!
                            </span>

                        </div>
                        </div>

                        <hr style={{ height: "2px", color: "black"}}/>

                        <div className="row er3c2-srws er3c2-srw-8">
                        <div className="col er3c2-srw-7-col-only">
                            <div className="question-circle">
                               <span className="question">?</span>
                            </div>
                            <span className="question-lorem-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat nulla assumenda sequi necessitatibus vero ab quisquam mollitia pariatur est? s obcaecati odio magni?
                                rspiciatis necessitatibus!
                            </span>

                        </div>
                        </div>

                        <hr style={{ height: "2px", color: "black"}}/>

                        <div className="row er3c2-srws er3c2-srw-9">
                        <div className="col er3c2-srw-7-col-only">
                            <div className="question-circle">
                               <span className="question">?</span>
                            </div>
                            <span className="question-lorem-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat nulla assumenda sequi necessitatibus vero ab quisquam mollitia pariatur est? Corrupti quis ut, molestiae est assumenda facilis obcaecati odio magni?
                                Sequi commodi iciatis necessitatibus!
                            </span>

                        </div>
                        </div>

                        <hr style={{ height: "3px", color: "black"}}/>

                        <div className="row er3c2-srws er3c2-srw-10">
                            <div className="col">
                            <h5>Departure Locations</h5>
                            </div>
                        </div>

                        <div className="row er3c2-srws er3c2-srw-11">
                            <div className="col er3c2-srw-11-col-only">
                            <p>Locations<span><AddCircleRoundedIcon/></span></p>
                            </div>
                        </div>

                        <div className="row er3c2-srws er3c2-srw-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 er3c2-srw-11-col-only">
                            <p>Location 1<span><DeleteForeverIcon/></span></p>
                            <input className="er3c2-srw-12-input" type="text" placeholder="Hyderabad"/>
                            <RoomRoundedIcon />
                            </div>
                        </div>

                        <div className="row er3c2-srws er3c2-srw-13">
                            <div className="col-lg-12 col-md-12 col-sm-12 er3c2-srw-13-col-only">
                            <p>Location 2<span><DeleteForeverIcon/></span></p>
                            <input className="er3c2-srw-12-input" type="text" placeholder="Chennai"/>
                            <RoomRoundedIcon />
                            </div>
                        </div>

                    </div>


                </div>

        </div>
    )
}

export default EditPackage
