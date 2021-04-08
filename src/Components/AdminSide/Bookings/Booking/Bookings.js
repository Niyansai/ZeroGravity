import React from 'react';
import SidebarAdmin from '../../SideBarAdmin/SidebarAdmin';
import "./styles.css";
import GravityLogo from '../../../../Assets/GravityLogo.png';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import BookingTable from './BookingTable/BookingTable';
import { Link, useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import SideBarDynamic from '../../SideBarAdmin/SiderBarDynamic/SideBarDynamic';


const Bookings = () => {

    const history = useHistory();

    const AdminLogOut = () => {
        const token = sessionStorage.removeItem("token");

    if (token == null) {
      history.push("/home");
      return;
    }
    }

    return (
        <div className="container-fluid admin-dshbrd-top">
            <div className="row ad-rw-1">
                <div className="col-lg-2 col-md-3 col-sm-12 ad-rw1-col-1">
                    <Link to="/home"> <img className="dshbr-logo" src={GravityLogo} alt="" /></Link>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-12 ad-rw1-col-2">
                    <p className="ad-rw1-col-2-p">Bookings</p>
                </div>
                <div className="col-lg-6 col-md-3 col-sm-12 ad-rw1-col-3">
                    <Avatar src={RealProfilePic} />
                    <p>Ram Singh <br /><span><small style={{ cursor: "pointer"}} onClick={AdminLogOut}>Logout</small></span></p>
                </div>
            </div>
            <div className="row ad-rw-2 ad-rw-2">
                <div className="col-lg-2 col-md-2 col-sm-12 ad-rw2-col-1">

                    <div className="admin-sidebar-top">
                        <Link to="/dashboard" className="links-decoraton"> <SideBarDynamic title="Dashboard" /></Link>
                        <Link to="/bookings" className="links-decoraton" > <SideBarDynamic title="Bookings" selected={true} /></Link>
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
                <div className="col-lg-10 col-md-10 col-sm-12 ad-rw2-col-2">

                    <div className="row ad-rw2-col-2-row-2">

                        <BookingTable />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bookings;
