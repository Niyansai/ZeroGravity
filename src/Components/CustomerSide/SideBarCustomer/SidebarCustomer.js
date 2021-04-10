import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import SideBarCDynamic from './SiderBarCDynamic/SideBarCDynamic';

import "./styles.css";

const SidebarCustomer = () => {

    const history = useHistory();

    const AdminLogOut = () => {

        const token = sessionStorage.removeItem("token");

        if (token == null) {
            history.push("/home");
            return;
        }
    }

    return (
        <div className="admin-sidebar-top">
           <Link to="/customer" className="links-decoraton"> <SideBarCDynamic title="Dashboard" selected/></Link>
            <Link to="/customer/bookings" className="links-decoraton" > <SideBarCDynamic title="Bookings"/></Link>
            <Link to="/customer/raiseissue" className="links-decoraton"><SideBarCDynamic title="Raise Issue"/></Link>
            <Link to="/customer/tripphotos" className="links-decoraton"><SideBarCDynamic title="Trip Photos" /></Link>
            <Link to="/customer/rules" className="links-decoraton"><SideBarCDynamic title="Rules"/></Link>
            <Link to="/customer/generalinfo" className="links-decoraton"><SideBarCDynamic title="General Info"/></Link>
            <button onClick={AdminLogOut} className="btn-sidebar">Logout</button>
        </div>
    )
}

export default SidebarCustomer;
