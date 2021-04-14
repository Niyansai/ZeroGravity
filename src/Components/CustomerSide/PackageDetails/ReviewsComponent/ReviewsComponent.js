import { Avatar } from '@material-ui/core'
import React from 'react'
import img1 from "../../../../Assets/img1.png";
import "./styles.css";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const ReviewsComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-6 avatar-col">
                <Avatar src={img1}/>
                </div>
                <div  className="col-lg-8 col-md-12 col-sm-12">
                    <div className="row"><div className="col"><p style={{fontSize: "14px", marginBottom: "10px"}}>Sharma Walla</p></div></div>
                    <div className="row"><div className="col"><p style={{fontSize: "14px", marginBottom: "1rem"}}><StarIcon className="start-pkg"/><StarIcon className="start-pkg"/><StarIcon className="start-pkg"/><StarIcon className="start-pkg"/><StarBorderIcon/></p></div></div>
                    <div className="row"><div className="col"><p style={{fontSize: "12px", marginBottom: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo debitis at numquam error doloribus accusantium animi recusandae odit sed illo, quia nulla itaque beatae quibusdam ducimus similique dolorum totam.</p></div></div>
                </div>
            </div>
            
        </div>
    )
}

export default ReviewsComponent;
