import React from 'react';
import "./styles.css"
import GravityLogo from '../../../Assets/GravityLogo.png';
import ProfileReal from '../../../Assets/ProfileReal.jpeg';
import { Avatar } from '@material-ui/core';
import SidebarAdmin from '../SideBarAdmin/SidebarAdmin';
import SearchIcon from '@material-ui/icons/Search';
import TableDashboard from './TableDashboard/TableDashboard';
import SmallTableDashboard from './TableDashboard/SmallTableDashboard/SmallTableDashboard';


const Dashboard = () => {

    return (
        <div className="container d-container">

            {/* ################# ROW-1 Header ################## */}

            <div className="row d-row-header">
                <div className="col-lg-6 col-md-6 col-sm-12 d-row-header-col-1">

                    <img className="dshbrd-logo" src={GravityLogo} alt=""/>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-row-header-col-2">
                                
                 <Avatar src={ProfileReal}/> <p style={{marginLeft: "10px", fontSize: "13px"}}>Ram Singh <br/><span><small style={{color:"#959595"}}>Logout</small></span></p>   
                </div>
            </div>

            {/* ################# ROW-2 Main Content ################## */}

            <div className="row d-row-2-main">

                <div className="col-lg-2 col-md-2 col-sm-12 d-row-2-col-1-sidebar">

                    <SidebarAdmin/>

                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 d-row-2-col-2-middle">

                    <div className="row d-row-2-sbrw-1">

                        <div className="col-sm d-row-2-sbrw-1-col">
                        <p>Registered <br/>Users</p>
                        </div>
                        <div className="col-sm d-row-2-sbrw-1-col">
                        <p>Total <br/>Bookings</p>
                        </div>
                        <div className="col-sm d-row-2-sbrw-1-col">
                        <p>Bookings <br/>Today</p>
                        </div>
                        
                    </div>


                    <div className="row d-row-2-sbrw-2">

                        <div className="col-lg-4 col-md-6 col-sm-12 d-row-2-sbrw-2-col-1">
                            <button className="d-row-2-sbrw-2-btn-1">
                                2500
                            </button>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 d-row-2-sbrw-2-col-2">
                        <button className="d-row-2-sbrw-2-btn-2">
                               <div>2500</div> <div>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;10</div>
                            </button>
                        </div>
                       
                    </div>
                    <div className="row d-row-2-sbrw-3">

                        <div className="col-lg-3 col-md-4 col-sm-2 d-rw-2-sbrw3-col d-row-2-sbrw-3-col-1">
                            <p>Todays Tasks</p>
                            <div className="d-row-2-sbrw-3-col-1-hglht-line">

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-2 d-rw-2-sbrw3-col d-row-2-sbrw-3-col-2">
                        <p>Pending</p>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-2 d-rw-2-sbrw3-col d-row-2-sbrw-3-col-3">
                        <p>Viewed</p>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-2 d-rw-2-sbrw3-col d-row-2-sbrw-3-col-4">
                        <input placeholder="Search" type="text"/>
                        <SearchIcon/>
                        </div>
                    </div>

                    {/* ############## Table ############## */}

                    <div className="row d-row-2-sbrw-4">
                        
                    <TableDashboard/>

                    </div>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12 d-row-2-col-3-last">

                    <div className="row d-row-2-c3-subrow1">

                        <div className="col d-row-2-c3-subrow1-col-1">
                            <div className="row d-row-2-c3-subrow1-col-1-rw1">
                                <div className="col">
                                    <div className="d-row-2-c3-subrow1-col-1-rw-cl-1-rectangle1">
                                    </div>
                                </div>
                            </div>

                            <div className="row d-row-2-c3-subrow1-col-1-rw2">
                            <div className="col">
                                <div className="col d-row-2-c3-subrow1-col-1-rw-cl-2-rectangle2">
                                </div>
                                </div>
                            </div>

                        </div>
                        <div className="col d-row-2-c3-subrow1-col-2">

                        <div class="card d-row-2-c3-subrow1-col-2-card">
                            <div class="card-body d-row-2-c3-subrow1-col-2-card-content">
                                <h6>Ram Singh</h6>
                                <Avatar src={ProfileReal}/>
                                <p>Admin</p>
                                <button className="d-card-btn">Edit Profile</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-row-2-c3-subrow2">
                        <p>Popular Packages</p>
                        <SmallTableDashboard/>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Dashboard
