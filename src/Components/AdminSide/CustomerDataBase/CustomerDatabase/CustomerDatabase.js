import React from 'react';
import "./styles.css"
import GravityLogo from '../../../../Assets/GravityLogo.png';
import ProfileReal from '../../../../Assets/ProfileReal.jpeg';
import { Avatar } from '@material-ui/core';
import SidebarAdmin from '../../SideBarAdmin/SidebarAdmin';
import SearchIcon from '@material-ui/icons/Search';
import TableCustomerDatabase from './TableCustomerDatabase/TableDashboard';
import { Link, useHistory } from 'react-router-dom';
import SideBarDynamic from '../../SideBarAdmin/SiderBarDynamic/SideBarDynamic';



const CustomerDatabase = () => {

    const history = useHistory();

    const AdminLogOut = () => {
        const token = sessionStorage.removeItem("token");

    if (token == null) {
      history.push("/home");
      return;
    }
    }

    return (
        <div className="container-fluid d-container">

            {/* ################# ROW-1 Header ################## */}

            <div className="row d-row-header">
                <div className="col-lg-6 col-md-6 col-sm-12 d-row-header-col-1">

                    <img className="dshbrd-logo" src={GravityLogo} alt="" />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-row-header-col-2">

                    <Avatar src={ProfileReal} /> <p style={{ marginLeft: "10px", fontSize: "13px" }}>Ram Singh <br /><span><small style={{ cursor: "pointer", color: "#959595"}} onClick={AdminLogOut}>Logout</small></span></p>
                </div>
            </div>

            {/* ################# ROW-2 Main Content ################## */}

            <div className="row d-row-2-main">

                <div className="col-lg-2 col-md-2 col-sm-12 d-row-2-col-1-sidebar">

                    <div className="admin-sidebar-top">
                        <Link to="/admin" className="links-decoraton"> <SideBarDynamic title="Dashboard" /></Link>
                        <Link to="/bookings" className="links-decoraton" > <SideBarDynamic title="Bookings" /></Link>
                        <Link to="/packages" className="links-decoraton"><SideBarDynamic title={<p style={{ lineHeight: "22px" }}>Packages<br /><small>Manager</small></p>} /></Link>
                        <Link to="/coupons" className="links-decoraton"><SideBarDynamic title="Coupons" /></Link>
                        <Link to="/inquiry" className="links-decoraton"><SideBarDynamic title="Inquiry" /></Link>
                        <Link to="/customerdatabase" className="links-decoraton"><SideBarDynamic title={<p style={{ lineHeight: "22px" }}>Customer<br /><small>Database</small></p>} selected={true} /></Link>
                        <Link to="/reports" className="links-decoraton"><SideBarDynamic title="Reports" /></Link>
                        <Link to="/blog" className="links-decoraton"><SideBarDynamic title="Blogs" /></Link>
                        <button className="btn-sidebar">Logout</button>
                    </div>

                </div>

                <div className="col-lg-10 col-md-6 col-sm-12 d-row-2-col-2-middle">

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

                        <div className="col-lg-4 col-md-6 col-sm-12 d-row-2-sbrw-2-col-1 cd-r2-sbrw2-col-1">
                            <button className="d-row-2-sbrw-2-btn-1 cd-btn-top-1">
                                2500
                            </button>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 d-row-2-sbrw-2-col-2 cd-btn-2500-col">
                            <button className="d-row-2-sbrw-2-btn-2 cd-btn-2500">
                                <div>2500</div> <div>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</div>
                            </button>
                        </div>

                    </div>

                    {/* ############## Table ############## */}

                    <div className="row d-row-2-sbrw-4 cdb-table-row">

                        <TableCustomerDatabase />

                    </div>
                </div>

            </div>


        </div>
    )
}

export default CustomerDatabase;
