import React, { Fragment, useEffect, useState } from 'react';
import "./styles.css"
import ProfileReal from '../../../Assets/ProfileReal.jpeg';
import { Avatar } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import BookingTable from './BookingTable/BookingTable';
import SidebarCustomer from '../SideBarCustomer/SidebarCustomer';


const DashboardCustomer = () => {

    const { id } = useParams();
    const history = useHistory();


    return (
        <div className="container-fluid d-container">

            {/* ################# ROW-1 Header ################## */}

            {/* ################# ROW-2 Main Content ################## */}

            <div className="row d-row-2-main cd-row-2-main">

                <div className="col-lg-2 col-md-2 col-sm-12 d-row-2-col-1-sidebar">


                    <div className="admin-sidebar-top">
                        <SidebarCustomer />
                    </div>
                </div>

                <div className="col">


                    {/* ############## Table ############## */}

                    <div className="row d-row-2-sbrw-4">
                        <BookingTable />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default DashboardCustomer;
