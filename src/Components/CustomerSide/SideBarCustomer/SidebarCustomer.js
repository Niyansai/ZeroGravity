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
            <Link to="/dashboard" className="links-decoraton" > <SideBarCDynamic title="Bookings"/></Link>
            <Link to="/dashboard/issue" className="links-decoraton"><SideBarCDynamic title="Raise Issue"/></Link>
            <Link to="/dashboard/tripphotos" className="links-decoraton"><SideBarCDynamic title="Trip Photos" /></Link>
            <Link to="/dashboard/rules" className="links-decoraton"><SideBarCDynamic title="Rules"/></Link>
            <Link to="/dashboard/generalinfo" className="links-decoraton"><SideBarCDynamic title="General Info"/></Link>
            <button onClick={AdminLogOut} className="btn-sidebar">Logout</button>
        </div>
    )
}

export default SidebarCustomer;
