import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const RatingBar = ({width}) => {
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-1 col-md-3 col-sm-6 d-flex">
                                    <h6>5</h6>
                                    <h6><StarIcon style={{color: "#ff6868", fontSize: "20px", marginTop: "-5px"}}/></h6>
                               </div>
                               <div className="col-lg-1 col-md-3 col-sm-6">
                                    
                               </div>
                               <div className="col-lg-5 col-md-12 col-sm-12">
                               <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: "90%", background: "#ff6868"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                               
                                </div>                            
                                
                               </div>
                               <div className="col-lg-1 col-md-3 col-sm-12">
                                <p style={{fontSize: "12px", color: "gray"}}>35</p>
                                </div>
            </div>
        </div>
    )
}

export default RatingBar
