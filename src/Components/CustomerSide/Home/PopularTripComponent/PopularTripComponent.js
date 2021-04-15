import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"
import API from '../../../../Utils/Utils';
import { useHistory } from 'react-router';

const PopularTripComponent = ({ id, img, from_text, title, description, }) => {

    const history = useHistory();
    const moveToPackageDetails = () => {
        history.push(`/packagedetails/${id}`);
    }

    return (
        <div className="container">
            <div className="row ">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img style={{ width: "100%", height: "200px" }} src={API.GET_IMAGE + "?image=" + img} />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 img-desc-p-trip">
                    <div className="row">
                        <div className="col">
                            <p><small>{from_text}</small></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col"><h4>{title}</h4></div>
                    </div>

                    <div className="row">
                        <div className="col"><p>{description}</p></div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Link to="/packagedetails">
                                <button onClick={(e) => {moveToPackageDetails()}} className="p-trip-btn">
                                    View More
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PopularTripComponent
