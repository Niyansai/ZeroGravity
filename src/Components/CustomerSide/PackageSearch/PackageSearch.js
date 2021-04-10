import React, { useState, useEffect } from 'react';
import img from "../../../Assets/img2.png";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PkgSearchFilter from './PkgSearchFilter/PkgSearchFilter';
import PkgSearchPreferences from './PkgSearchPreferences/PkgSearchPreferences';
import { useHistory } from 'react-router';
import axios from 'axios';
import API from '../../../Utils/Utils';
import HotelIcon from '@material-ui/icons/Hotel';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

const PackageSearch = () => {

    const [packageOf, setPackages] = useState([]);

    const history = useHistory();

    useEffect(() => {
        loadPackage();
    }, [])


    const loadPackage = async () => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/home");
            return;
        }

        await axios.get(API.LIST_PACKAGES, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                console.log(response.data.data)
                setPackages(response.data.data);
            })
            .catch((err) => {
            });
    }

    return (

        <div className="container-fluid pkg-details-container" >

            {/* ############ LINE DIVIDER ########### */}

            <div className="row head-diveder-lin-pkg-row">
                <div className="col">
                    <div className="head-diveder-lin-pkg">

                    </div>
                </div>
            </div>

            {/* ############ ROW-2 ########### */}

            <div style={{ marginTop: "2rem" }} className="row pkgsearch-container">
                <div className="col-lg-3 col-md-6 col-sm-12"></div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h4>Your Preferences</h4>
                    <p style={{ fontSize: "12px", marginLeft: "18px" }}>Showing results {packageOf.length}</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <input style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="Search for Packages" type="text" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <ArrowBackIcon />
                </div>
            </div>

            {/* ############ ROW-3 ########### */}

            <div style={{ marginBottom: "1rem", marginTop: "20px" }} className="row">
                <div className="col-3" style={{ marginLeft: "20px" }}>
                    <PkgSearchFilter head_text="Type" filters_head="Filters" />
                </div>
                <div className="col">
                   
                </div>
            </div>
        </div>
    )
}

export default PackageSearch
