import React, { Fragment, useEffect, useState } from 'react';
import "./styles.css"
import GravityLogo from '../../../Assets/GravityLogo.png';
import ProfileReal from '../../../Assets/ProfileReal.jpeg';
import { Avatar } from '@material-ui/core';
import SidebarAdmin from '../SideBarAdmin/SidebarAdmin';
import SearchIcon from '@material-ui/icons/Search';
import TableDashboard from './TableDashboard/TableDashboard';
import SmallTableDashboard from './TableDashboard/SmallTableDashboard/SmallTableDashboard';
import SideBarDynamic from '../SideBarAdmin/SiderBarDynamic/SideBarDynamic';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import API from "../../../Utils/Utils";
import {logout} from '../../../Utils/SessionUtil';


const Dashboard = () => {

    const { id } = useParams();
    const history = useHistory();
    const [registeredUsers, setRegisteredUsers] = useState(0);


    useEffect(() => {
        loadUsers();
    }, [])

    const AdminLogOut = () => {
        const token = sessionStorage.removeItem("token");

    if (token == null) {
      history.push("/home");
      return;
    }
    }

    const loadUsers = async () => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/home");
            return;
        }

        await axios.get(API.LIST_USERS, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                setRegisteredUsers(response.data.data.length);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const logoutOut = () => {
        logout(history);
    }


    return (
        <div className="container-fluid d-container">

            {/* ################# ROW-1 Header ################## */}

            <div className="row d-row-header">
                <div className="col-lg-6 col-md-6 col-sm-12 d-row-header-col-1">

                    <img className="dshbrd-logo" src={GravityLogo} alt="" />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-row-header-col-2">

                <p style={{ marginLeft: "1rem", fontSize: "12px" }}> {sessionStorage.getItem("user")} <br /><span><small style={{ cursor: "pointer"}} onClick={logoutOut}> Logout </small></span></p>
                </div>
            </div>

            {/* ################# ROW-2 Main Content ################## */}

            <div className="row d-row-2-main">

                <div className="col-lg-2 col-md-2 col-sm-12 d-row-2-col-1-sidebar">


                    <div className="admin-sidebar-top">
                        <Link to="/dashboard" className="links-decoraton"> <SideBarDynamic title="Dashboard" selected={true} /></Link>
                        <Link to="/bookings" className="links-decoraton" > <SideBarDynamic title="Bookings" /></Link>
                        {/* <Link to="/custompackages" className="links-decoraton"><SideBarDynamic title={<p style={{lineHeight: "22px", marginBottom:"30px"}}>Custom<br/>Packages</p>}/></Link> */}
                        <Link to="/packages" className="links-decoraton"><SideBarDynamic title={<p style={{ lineHeight: "22px" }}>Packages<br /><small>Manager</small></p>} /></Link>
                        <Link to="/coupons" className="links-decoraton"><SideBarDynamic title="Coupons" /></Link>
                        <Link to="/inquiry" className="links-decoraton"><SideBarDynamic title="Inquiry" /></Link>
                        <Link to="/customerdatabase" className="links-decoraton"><SideBarDynamic title={<p style={{ lineHeight: "22px" }}>Customer<br /><small>Database</small></p>} /></Link>
                        <Link to="/reports" className="links-decoraton"><SideBarDynamic title="Reports" /></Link>
                        <Link to="/blog" className="links-decoraton"><SideBarDynamic title="Blogs" /></Link>
                        <button className="btn-sidebar">Logout</button>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 d-row-2-col-2-middle">

                    <div className="row d-row-2-sbrw-1">

                        <div className="col-sm d-row-2-sbrw-1-col">
                            <p>Registered <br />Users</p>
                        </div>
                        <div className="col-sm d-row-2-sbrw-1-col">
                            <p>Total <br />Bookings</p>
                        </div>
                        <div className="col-sm d-row-2-sbrw-1-col">
                            <p>Bookings <br />Today</p>
                        </div>

                    </div>


                    <div className="row d-row-2-sbrw-2">

                        <div className="col-lg-4 col-md-6 col-sm-12 d-row-2-sbrw-2-col-1">
                            <button className="d-row-2-sbrw-2-btn-1">
                                { registeredUsers }
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
                            <input placeholder="Search" type="text" />
                            <SearchIcon />
                        </div>
                    </div>

                    {/* ############## Table ############## */}

                    <div className="row d-row-2-sbrw-4">

                    <TableDashboard />

                    </div>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12 d-row-2-col-3-last">

                    <div className="row d-row-2-c3-subrow1">

                        <div className="col-lg-5 col-md-5 col-sm-12 d-row-2-c3-subrow1-col-1">
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
                        <div className="col-lg-6 col-md-5 col-sm-12 d-row-2-c3-subrow1-col-2">

                            <div class="card d-row-2-c3-subrow1-col-2-card">
                                <div class="card-body d-row-2-c3-subrow1-col-2-card-content">
                                    <h6>Ram Singh</h6>
                                    <Avatar src={ProfileReal} />
                                    <p>Admin</p>
                                    <button className="d-card-btn">Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-row-2-c3-subrow2">
                        <p>Popular Packages</p>
                        <SmallTableDashboard />

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Dashboard;
