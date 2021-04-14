import { Avatar } from '@material-ui/core';
import React from 'react';
import "./styles.css";
import ProfileReal from "../../../../Assets/ProfileReal.jpeg";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const OurTeamCard = () => {

    return (

        <div>

            <div className="container-fluid our-team-card">


            <div className="row">
                <div className="col avatar-our-team">
                    <Avatar src={ProfileReal}/>
                </div>
            </div>

            <div className="row">
                <div className="col oteam-card-title">
                    <h6>Ram Singh</h6>
                    <div className="our-team-line" style={{width: "50%", background:"#ff4f4f", borderRadius:5, height: "4px", marginBottom: "10px", marginTop: "10px"}}></div>
                    <p style={{ color:"gray", fontSize: "13px"}}>Guide</p>
                </div>
            </div>


<div className="row">
    <div className="col">
        <p style={{ color:"gray", fontSize: "13px"}}>A great experience that takes <br/> you to the heavens of india <br/>and the roof of the world.</p>
    </div>
</div>

<div className="row">
    <div className="col o-team-social-icons">
      <InstagramIcon/>
      <FacebookIcon/>
      <TwitterIcon/>
    </div>
</div>





        
            </div>


        </div>
    )
}

export default OurTeamCard
