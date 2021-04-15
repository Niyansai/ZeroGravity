import React, { Fragment, useEffect, useState } from 'react';
import "./styles.css"
import GravityLogo from '../../../Assets/GravityLogo.png';
import ProfileReal from '../../../Assets/ProfileReal.jpeg';
import { Avatar } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import API from "../../../Utils/Utils";
import { logout } from '../../../Utils/SessionUtil';
import TableDashboardCustomer from './TableDashboardCustomer/TableDashboardCustomer';
import SidebarCustomer from '../SideBarCustomer/SidebarCustomer';
import SmallCTableCustomer from './TableDashboardCustomer/SmallCTableDashboard/SmallCTableDashboard';


const DashboardCustomer = () => {

    const { id } = useParams();
    const history = useHistory();
    const [registeredUsers, setRegisteredUsers] = useState(0);
    const [totalBookings, setTotalBookings] = useState(0);
    const [currentUser, setCurrentUser] = useState(0);
 

    useEffect(() => {
        loadUsers();
        loadBooking();
    }, [])


    const editProfile = () => {
        history.push("/dashboard/editprofile");
    }

    const loadCurrentUser = async () => {

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
                setCurrentUser(response.data.data);
            })
            .catch((err) => {
            });
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
            });
    }

    const logoutOut = () => {

        logout(history);
    }


    const loadBooking = async () => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
          history.push("/home");
          return;
        }
    
        await axios.get(API.LIST_BOOKINGS, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
          .then((response) => {
            setTotalBookings(response.data.data.length);
          })
          .catch((err) => {
          });
      }
    


    return (
        <div className="container-fluid d-container">

            {/* ################# ROW-1 Header ################## */}

            {/* ################# ROW-2 Main Content ################## */}

            <div className="row d-row-2-main cd-row-2-main">

                <div className="col-lg-2 col-md-2 col-sm-12 d-row-2-col-1-sidebar">


                    <div className="admin-sidebar-top">
                        <SidebarCustomer/>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 d-row-2-col-2-middle">

                    <div className="row d-row-2-sbrw-1">

                        
                        <div className="col-sm d-row-2-sbrw-1-col cd-col-btn-top-text">
                            <p>My Total Trips</p>
                        </div>
                    </div>


                    <div className="row d-row-2-sbrw-2">

                        <div className="col-only d-row-2-sbrw-2-col-1 cd-count-btn">
                            <button className="d-row-2-sbrw-2-btn-1">
                                {registeredUsers}
                            </button>
                        </div>

                    </div>
                   

                    {/* ############## Table ############## */}

                    <div className="row d-row-2-sbrw-4">

                        <TableDashboardCustomer />

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
                                    <h6 class="text-center">{sessionStorage.getItem("user")}</h6>
                                    <Avatar src={ProfileReal} />
                                    <p>User</p>
                                    <button className="d-card-btn" onClick={editProfile}>Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-row-2-c3-subrow2">
                        <p>Popular Packages</p>
                        <SmallCTableCustomer/>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default DashboardCustomer;
