import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

const PopularTripComponent = ({ img, from_text, title, description, }) => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-lg-6 col-md-12 col-sm-12">
                {img}
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
                        <button className="p-trip-btn">
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
