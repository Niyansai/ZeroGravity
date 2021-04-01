import React from 'react';
import SidebarAdmin from '../../SideBarAdmin/SidebarAdmin';
import "./styles.css";
import GravityLogo from '../../../../Assets/GravityLogo.png';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import TablePackagesManager from './TablePackagesManager/TablePackagesManager';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';


const PackagesManager = () => {

    return (
        <div className="container-fluid admin-dshbrd-top">
            <div className="row ad-rw-1">
                <div className="col-lg-3 col-md-3 col-sm-12 ad-rw1-col-1">
                <img className="dshbr-logo" src={GravityLogo} alt=""/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 ad-rw1-col-2 cp-title">
                    <p className="ad-rw1-col-2-p">Packages Manager</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 ad-rw1-col-2 custom-search-bar">
                   <span><input placeholder="Search with keyword or label" className="ad-rw1-col-2-input" type="text"/>
                    <SearchIcon /></span>
                    </div>
                <div className="col-lg-3 col-md-3 col-sm-12 ad-rw1-col-3 custom-avatar">
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
                            <h6>All</h6>
                            <div className="all-highlight">
                                
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-3 pm-sortable">
                        <h6>Sort By <ArrowDropDownIcon/></h6>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-4">
                   <Link to="/packages/add"><button className="btn-delete-adb pm-add-btn"> <AddIcon /><span>ADD PACKAGE</span></button> </Link> 
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-4">
                        <button className="btn-delete-adb pm-rp-btn"> <DeleteIcon /> <span>REMOVE PACKAGE</span></button>
                        </div>
                    </div>

                    <div className="row ad-rw2-col-2-row-2">

                        <TablePackagesManager/>

                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default PackagesManager;
