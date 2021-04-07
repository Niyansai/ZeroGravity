import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import GravityLogo from "../../../Assets/GravityLogo.png";
import ProfileReal from "../../../Assets/ProfileReal.jpeg";
import BookingTable from '../Bookings/Booking/BookingTable/BookingTable';
import SideBarDynamic from '../SideBarAdmin/SiderBarDynamic/SideBarDynamic';
import ReportTable from './ReportTable1/ReportTable1';
import "./styles.css";

const Reports = () => {

    const[dashboardData, setDashboardData] = useState({

        
    })

    const history = useHistory();

    const AdminLogOut = () => {
        const token = sessionStorage.removeItem("token");

    if (token == null) {
      history.push("/home");
      return;
    }
    }


    
    return (
        <div className="container-fluid admin-dshbrd-top reports-container-top">
            <div className="row ad-rw-1 rprts-rw-1">
                <div className="col-lg-2 col-md-3 col-sm-12 ad-rw1-col-1 rprts-rw-1-cl-1">
                    <Link to="/home"> <img className="dshbr-logo" src={GravityLogo} alt="" /></Link>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-12 ad-rw1-col-2 rprts-rw-1-cl-2">
                    
                </div>
                <div className="col-lg-6 col-md-3 col-sm-12 ad-rw1-col-3 rprts-rw-1-cl-3">
                    <Avatar src={ProfileReal} />
                    <p>Ram Singh <br /><span><small onClick={AdminLogOut} style={{ color: "#959595", cursor: "pointer" }}>Logout</small></span></p>
                </div>
            </div>


            <div className="row ad-rw-2 ad-rw-2 rprts-rw-2">
                <div className="col-lg-2 col-md-2 col-sm-12 ad-rw2-col-1 rprts-rw-1-cl-1">

                    <div className="admin-sidebar-top">
                        <Link to="/dashboard" className="links-decoraton"> <SideBarDynamic title="Dashboard" /></Link>
                        <Link to="/bookings" className="links-decoraton" > <SideBarDynamic title="Bookings" /></Link>
                        <Link to="/packages" className="links-decoraton"><SideBarDynamic title={<p style={{ lineHeight: "22px" }}>Packages<br /><small>Manager</small></p>} /></Link>
                        <Link to="/inquiry" className="links-decoraton"><SideBarDynamic title="Inquiry" /></Link>
                        <Link to="/customerdatabase" className="links-decoraton"><SideBarDynamic title={<p style={{ lineHeight: "22px" }}>Customer<br /><small>Database</small></p>} /></Link>
                        <Link to="/reports" className="links-decoraton"><SideBarDynamic title="Reports" selected={true}/></Link>
                        <Link to="/blog" className="links-decoraton"><SideBarDynamic title="Blogs" /></Link>
                        <button className="btn-sidebar">Logout</button>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 ad-rw2-col-2 rprts-rw-1-cl-2">

                    <div className="row ad-rw2-col-2-row-2 r-table-col">

                        <ReportTable />

                    </div>
                </div>

            </div>



            </div>

            
    )
}

export default Reports;
