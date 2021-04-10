import React from 'react';
import "./styles.css";

const SideBarCDynamic = ({ title, selected }) => {
    
    
    return (

        <div className={`d-sidebar-dynamic ${selected && "sidebar_active"}`}>
            <h6>{title}</h6>
        </div>
    )
}

export default SideBarCDynamic;
