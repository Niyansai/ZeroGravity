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
import { Link, useHistory, useParams } from 'react-router-dom';
import SideBarDynamic from '../../SideBarAdmin/SiderBarDynamic/SideBarDynamic';



const PackagesManager = ({ selected }) => {

    const history = useHistory();

    const AdminLogOut = () => {
        const token = sessionStorage.removeItem("token");

    if (token == null) {
      history.push("/home");
      return;
    }
    }


    const { id } = useParams();

    return (
        <div className="container-fluid admin-dshbrd-top">
            <div className="row ad-rw-1">
                <div className="col-lg-3 col-md-6 col-sm-6 ad-rw1-col-1">
                    <img className="dshbr-logo" src={GravityLogo} alt="" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 ad-rw1-col-2 cp-title">
                    <p className="ad-rw1-col-2-p">Packages Manager</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 ad-rw1-col-3 custom-avatar">
                    <Avatar src={RealProfilePic} />
                    <p>Ram Singh <br /><span><small onClick={AdminLogOut} style={{ color: "#959595", cursor: "pointer" }}>Logout</small></span></p>
                </div>
            </div>

            <div className="row ad-rw-2 ad-rw-2">
                <div className="col-lg-2 col-md-2 col-sm-12 ad-rw2-col-1">

                    <div className="admin-sidebar-top">
                        <Link to="/admin" className="links-decoraton"> <SideBarDynamic title="Dashboard" /></Link>
                        <Link to="/bookings" className="links-decoraton" > <SideBarDynamic title="Bookings" /></Link>
                        {/* <Link to="/custompackages" className="links-decoraton"><SideBarDynamic title={<p style={{lineHeight: "22px", marginBottom:"30px"}}>Custom<br/>Packages</p>}/></Link> */}
                        <Link to="/packages" className="links-decoraton"><SideBarDynamic title={<p style={{ lineHeight: "22px" }}>Packages<br /><small>Manager</small></p>} selected={true} /></Link>
                        <Link to="/coupons" className="links-decoraton"><SideBarDynamic title="Coupons" /></Link>
                        <Link to="/inquiry" className="links-decoraton"><SideBarDynamic title="Inquiry" /></Link>
                        <Link to="/customerdatabase" className="links-decoraton"><SideBarDynamic title={<p style={{ lineHeight: "22px" }}>Customer<br /><small>Database</small></p>} /></Link>
                        <Link to="/reports" className="links-decoraton"><SideBarDynamic title="Reports" /></Link>
                        <Link to="/blog" className="links-decoraton"><SideBarDynamic title="Blogs" /></Link>
                        <button className="btn-sidebar">Logout</button>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 ad-rw2-col-2">
                    <TablePackagesManager />
                </div>
            </div>
        </div>
    )
}

export default PackagesManager;
