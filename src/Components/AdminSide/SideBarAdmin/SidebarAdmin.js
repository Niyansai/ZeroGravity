import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SideBarDynamic from './SiderBarDynamic/SideBarDynamic';
import "./styles.css";

const SidebarAdmin = () => {

    return (
        <div className="admin-sidebar-top">
           <Link to="/dashboard" className="links-decoraton"> <SideBarDynamic title="Dashboard"/></Link>
            <Link to="/bookings" className="links-decoraton" > <SideBarDynamic title="Bookings"/></Link>
             {/* <Link to="/custompackages" className="links-decoraton"><SideBarDynamic title={<p style={{lineHeight: "22px", marginBottom:"30px"}}>Custom<br/>Packages</p>}/></Link> */}
            <Link to="/packages" className="links-decoraton"><SideBarDynamic title={<p style={{lineHeight: "22px"}}>Packages<br/><small>Manager</small></p>}/></Link>
            <Link to="/inquiry" className="links-decoraton"><SideBarDynamic title="Inquiry"/></Link>
            <Link to="/customerdatabase" className="links-decoraton"><SideBarDynamic title={<p style={{lineHeight: "22px"}}>Customer<br/><small>Database</small></p>}/></Link>
            <Link to="/reports" className="links-decoraton"><SideBarDynamic title="Reports"/></Link>
            <Link to="/blog" className="links-decoraton"><SideBarDynamic title="Blogs"/></Link>
            <button className="btn-sidebar">Logout</button>
        </div>
    )
}

export default SidebarAdmin;
