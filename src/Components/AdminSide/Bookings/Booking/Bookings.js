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


const Bookings = () => {
    return (
        <div className="container admin-dshbrd-top">
            <div className="row ad-rw-1">
                <div className="col-lg-2 col-md-3 col-sm-12 ad-rw1-col-1">
                <img className="dshbr-logo" src={GravityLogo} alt=""/>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-12 ad-rw1-col-2">
                    <p className="ad-rw1-col-2-p">Bookings</p>
                   <span><input placeholder="Search" className="ad-rw1-col-2-input" type="text"/>
                    <SearchIcon /></span>
                </div>
                <div className="col-lg-6 col-md-3 col-sm-12 ad-rw1-col-3">
                    <Avatar src={RealProfilePic}/>
                    <p>Ram Singh <br/><span><small>Logout</small></span></p>
                </div>
            </div>
            <div className="row ad-rw-2 ad-rw-2">
                <div className="col-lg-2 col-md-2 col-sm-12 ad-rw2-col-1">
                <SidebarAdmin/>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 ad-rw2-col-2">
                    <div className="row ad-rw2-col-2-row-1">
                        <div className="col-lg-2 col-md-1 col-sm-6 ad-rw2-col-2-row-1-col-1" >
                            <h6>New</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-2">
                        <h6>Previous</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-3">
                        <h6>Sort By <ArrowDropDownIcon/></h6>
                        </div>
                        <div className="col-lg-6 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-4">
                        <button className="btn-delete-adb"> <DeleteIcon /> Cancel Booking</button>
                        </div>
                    </div>

                    <div className="row ad-rw2-col-2-row-2">

                        <BookingTable/>

                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Bookings;
