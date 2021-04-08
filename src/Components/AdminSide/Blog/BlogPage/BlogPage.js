import React from 'react';
import "./styles.css"
import GravityLogo from '../../../../Assets/GravityLogo.png';
import ProfileReal from '../../../../Assets/ProfileReal.jpeg';
import { Avatar } from '@material-ui/core';
import TableBlog from './TableBlog/TableBlog';
import { Link, useHistory } from 'react-router-dom';
import SideBarDynamic from '../../SideBarAdmin/SiderBarDynamic/SideBarDynamic';



const BlogPage = () => {

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

                    <Avatar src={ProfileReal} /> <p style={{ marginLeft: "10px", fontSize: "13px" }}> {sessionStorage.getItem("user")} <br /><span><small style={{ cursor: "pointer"}} onClick={AdminLogOut}>Logout</small></span></p>
                </div>
            </div>

            {/* ################# ROW-2 Main Content ################## */}

            <div className="row d-row-2-main">

                <div className="col-lg-2 col-md-2 col-sm-12 d-row-2-col-1-sidebar">

                    <div className="admin-sidebar-top">
                        <Link to="/dashboard" className="links-decoraton"> <SideBarDynamic title="Dashboard" /></Link>
                        <Link to="/bookings" className="links-decoraton" > <SideBarDynamic title="Bookings" /></Link>
                        {/* <Link to="/custompackages" className="links-decoraton"><SideBarDynamic title={<p style={{lineHeight: "22px", marginBottom:"30px"}}>Custom<br/>Packages</p>}/></Link> */}
                        <Link to="/packages" className="links-decoraton"><SideBarDynamic title={<p style={{ lineHeight: "22px" }}>Packages<br /><small>Manager</small></p>} /></Link>
                        <Link to="/coupons" className="links-decoraton"><SideBarDynamic title="Coupons" /></Link>
                        <Link to="/inquiry" className="links-decoraton"><SideBarDynamic title="Inquiry" /></Link>
                        <Link to="/customerdatabase" className="links-decoraton"><SideBarDynamic title={<p style={{ lineHeight: "22px" }}>Customer<br /><small>Database</small></p>} /></Link>
                        <Link to="/reports" className="links-decoraton"><SideBarDynamic title="Reports" /></Link>
                        <Link to="/blog" className="links-decoraton"><SideBarDynamic title="Blogs" selected={true}  /></Link>
                        <button className="btn-sidebar">Logout</button>
                    </div>

                </div>


                {/* ############## Table ############## */}

                <div className="col-lg-10 col-md-10 col-sm-12 ad-rw2-col-2">
                    <TableBlog />
                </div>
            </div>

        </div>

    )
}

export default BlogPage;