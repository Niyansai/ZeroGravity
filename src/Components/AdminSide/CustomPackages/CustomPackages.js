import React from 'react';
import "./styles.css";
import GravityLogo from '../../../Assets/GravityLogo.png';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import RealProfilePic from "../../../Assets/ProfileReal.jpeg";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import CustomPackagesTable from './CustomPackagesTable/CustomPackagesTable';
import SidebarAdmin from '../SideBarAdmin/SidebarAdmin';
import { Link, useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import SideBarDynamic from '../SideBarAdmin/SiderBarDynamic/SideBarDynamic';


const CustomPackages = () => {


    return (
        <div className="container-fluid admin-dshbrd-top">
            <div className="row ad-rw-1">
                <div className="col-lg-3 col-md-3 col-sm-12 ad-rw1-col-1">
               <Link to="/home"> <img className="dshbr-logo" src={GravityLogo} alt=""/> </Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 ad-rw1-col-2 cp-title">
                    <p className="ad-rw1-col-2-p">Custom Packages</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 ad-rw1-col-2 custom-search-bar">
                   <span><input placeholder="Search" className="ad-rw1-col-2-input" type="text"/>
                    <SearchIcon /></span>
                    </div>
                <div className="col-lg-3 col-md-3 col-sm-12 ad-rw1-col-3 custom-avatar">
                    <Avatar src={RealProfilePic}/>
                    <p>Ram Singh <br/><span><small>Logout</small></span></p>
                </div>
            </div>
            <div className="row ad-rw-2 ad-rw-2">
                <div className="col-lg-2 col-md-2 col-sm-12 ad-rw2-col-1">
                <div className="admin-sidebar-top">
           <Link to="/dashboard" className="links-decoraton"> <SideBarDynamic title="Dashboard" /></Link>
            <Link to="/bookings" className="links-decoraton" > <SideBarDynamic title="Bookings"/></Link>
             {/* <Link to="/custompackages" className="links-decoraton"><SideBarDynamic title={<p style={{lineHeight: "22px", marginBottom:"30px"}}>Custom<br/>Packages</p>} selected={true}/></Link> */}
            <Link to="/packages" className="links-decoraton"><SideBarDynamic title={<p style={{lineHeight: "22px"}}>Packages<br/><small>Manager</small></p>}/></Link>
            <Link to="/inquiry" className="links-decoraton"><SideBarDynamic title="Inquiry"/></Link>
            <Link to="/customerdatabase" className="links-decoraton"><SideBarDynamic title={<p style={{lineHeight: "22px"}}>Customer<br/><small>Database</small></p>}/></Link>
            <Link to="/packagerequest" className="links-decoraton"><SideBarDynamic title="Reports"/></Link>
            <Link to="/blog" className="links-decoraton"><SideBarDynamic title="Blogs"/></Link>
            <button className="btn-sidebar">Logout</button>
        </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 ad-rw2-col-2">
                    <div className="row ad-rw2-col-2-row-1">
                        <div className="col-lg-2 col-md-1 col-sm-6 ad-rw2-col-2-row-1-col-1 cp-h6-text" >
                            <h6>New</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-2 cp-h6-text">
                        <h6>Previous</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-3 cp-h6-text">
                        <h6>Sort By <ArrowDropDownIcon/></h6>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-4">
                        <Link to="/bookings/add"><button className="btn-delete-adb pm-add-btn"> <AddIcon /><span>ADD BOOKING</span></button> </Link> 
                        </div>
                        
                        <div className="col-lg-2 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-4">
                        <button className="btn-delete-adb"> <DeleteIcon /> Cancel Booking</button>
                        </div>
                    </div>

                    <div className="row ad-rw2-col-2-row-2">

                        <CustomPackagesTable/>

                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default CustomPackages;
