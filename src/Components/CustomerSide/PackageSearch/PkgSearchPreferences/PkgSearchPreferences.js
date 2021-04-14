import React from 'react';
import img2 from "../../../../Assets/img2.png";
import HotelIcon from '@material-ui/icons/Hotel';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

const PkgSearchPreferences = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-md-12">
                    <img className="img-fluid" style={{ height: "250px" }} src={img2} alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col">
                            <h6>Gokharna Trip</h6>
                        </div></div>
                    <div className="row"><div className="col">
                        <p style={{ color: "gray", fontSize: "12px" }} >A great experience that takes you to the heavens of india and the roof of the world</p>
                    </div></div>
                    <div className="row"><div className="col">
                        <h6>4 Days / 5 Nights</h6>
                    </div></div>
                    <div className="row"><div className="col">
                        <p style={{ color: "gray", fontSize: "12px" }}>From</p>
                    </div></div>
                    <div className="row"><div className="col">
                        <h6 style={{ color: "#ff4f4f" }}>15,000/- <small>per person</small></h6>
                    </div></div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <p style={{ color: "gray", fontSize: "12px" }}>Adventure</p>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <p style={{ color: "gray", fontSize: "12px" }}>Hills</p>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <p style={{ color: "gray", fontSize: "12px" }}>Hiking</p>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <p style={{ color: "gray", fontSize: "12px" }}>Trekking</p>

                        </div>

                    </div>

                    <div className="row">
                        <div className="col">
                            <button style={{ background: "none", width: "100%", outline: "none", padding: "5px" }}>More</button>
                        </div>
                        <div className="col">
                            <button style={{ background: "#ff4f4f", width: "100%", border: "none", color: "white", padding: "5px", outline: "none" }}>Book</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div style={{ marginTop: "1rem" }} className="row">
                        <div style={{ marginBottom: "1rem" }} style={{ marginBottom: "1rem" }} className="col d-flex">
                            <HotelIcon style={{ color: "gray" }} />
                            <p style={{ color: "gray", marginLeft: "10px", fontSize: "12px" }}>Meals<br />Included</p>
                        </div></div>
                    <div className="row">
                        <div style={{ marginBottom: "1rem" }} className="col d-flex">
                            <RestaurantMenuIcon style={{ color: "gray" }} />
                            <p style={{ color: "gray", marginLeft: "10px", fontSize: "12px" }}>Hotels<br />Included</p>
                        </div></div>
                    <div className="row">
                        <div style={{ marginBottom: "1rem" }} className="col d-flex">
                            <EmojiTransportationIcon style={{ color: "gray" }} />
                            <p style={{ color: "gray", marginLeft: "10px", fontSize: "12px" }}>Transport<br />Included</p>
                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default PkgSearchPreferences
