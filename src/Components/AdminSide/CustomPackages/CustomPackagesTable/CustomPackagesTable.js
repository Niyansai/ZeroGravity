import React, { useState } from 'react'
import "./styles.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RightArrowP from '../../../../Assets/RightArrowP.png';
import LeftArrowP from "../../../../Assets/LeftArrowP.png";


const CustomPackagesTable = () => { 

// const [changeRowBg, setChangeRowBg] = useState(true);

// const changeBackground = () => {
//     setChangeRowBg(false)
// }

    return (
        <div class="table-responsive">
  <table class="table table-borderless bt-table">
  <thead className="text-center thead-bt">
    <tr className= 'bt-row'>
      <th scope="col">SI</th>
      <th scope="col">Name</th>
      <th scope="col">Destination</th>
      <th scope="col">Departure</th>
      <th scope="col">People</th>
      <th scope="col">Departure Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className="text-center tbody-btable">
    {/* <tr className= {changeRowBg ? "bt-row" : "bt-row-br-black" }> */}
    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      
      <div class="dropdown">
  <button class="btn btn-secondary btn-toggle-view-details" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
  <td><u>View Details</u></td>
  </button>
  <ul class="dropdown-menu bt-view-details-info-bg" aria-labelledby="dropdownMenu2">
    <li><div class="dropdown-item-text container-fluid cntnr-drpdwn">
        
        <div className="row bt-drdwn-rw-1">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package Name:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>Trip To Goa(4d/5N)</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Phone:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>+91 8647282929</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Booking Date:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>21/05/21</p>
            </div>
        </div>

        <div className="row bt-drdwn-rw-2">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package ID:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>1234566</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Email:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>serty@yahoo.com</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Payment Receipt:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}><u>View</u></p>
            </div>
        </div>
        
        </div></li>
  </ul>
</div>

    </tr>
    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      <div class="dropdown">
  <button class="btn btn-secondary btn-toggle-view-details" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
  <td ><u>View Details</u></td>
  </button>
  <ul class="dropdown-menu bt-view-details-info-bg" aria-labelledby="dropdownMenu2">
    <li><div class="dropdown-item-text container-fluid cntnr-drpdwn">
        
        <div className="row bt-drdwn-rw-1">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package Name:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>Trip To Goa(4d/5N)</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Phone:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>+91 8647282929</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Booking Date:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>21/05/21</p>
            </div>
        </div>

        <div className="row bt-drdwn-rw-2">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package ID:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>1234566</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Email:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>serty@yahoo.com</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Payment Receipt:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}><u>View</u></p>
            </div>
        </div>
        
        </div></li>
  </ul>
</div>
    </tr>
    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      <div class="dropdown">
  <button class="btn btn-secondary btn-toggle-view-details" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
  <td ><u>View Details</u></td>
  </button>
  <ul class="dropdown-menu bt-view-details-info-bg" aria-labelledby="dropdownMenu2">
    <li><div class="dropdown-item-text container-fluid cntnr-drpdwn">
        
        <div className="row bt-drdwn-rw-1">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package Name:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>Trip To Goa(4d/5N)</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Phone:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>+91 8647282929</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Booking Date:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>21/05/21</p>
            </div>
        </div>

        <div className="row bt-drdwn-rw-2">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package ID:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>1234566</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Email:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>serty@yahoo.com</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Payment Receipt:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}><u>View</u></p>
            </div>
        </div>
        
        </div></li>
  </ul>
</div>
    </tr>
    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      <div class="dropdown">
  <button class="btn btn-secondary btn-toggle-view-details" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
  <td ><u>View Details</u></td>
  </button>
  <ul class="dropdown-menu bt-view-details-info-bg" aria-labelledby="dropdownMenu2">
    <li><div class="dropdown-item-text container-fluid cntnr-drpdwn">
        
        <div className="row bt-drdwn-rw-1">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package Name:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>Trip To Goa(4d/5N)</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Phone:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>+91 8647282929</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Booking Date:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>21/05/21</p>
            </div>
        </div>

        <div className="row bt-drdwn-rw-2">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package ID:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>1234566</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Email:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>serty@yahoo.com</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Payment Receipt:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}><u>View</u></p>
            </div>
        </div>
        
        </div></li>
  </ul>
</div>
    </tr>
    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      <div class="dropdown">
  <button class="btn btn-secondary btn-toggle-view-details" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
  <td ><u>View Details</u></td>
  </button>
  <ul class="dropdown-menu bt-view-details-info-bg" aria-labelledby="dropdownMenu2">
    <li><div class="dropdown-item-text container-fluid cntnr-drpdwn">
        
        <div className="row bt-drdwn-rw-1">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package Name:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>Trip To Goa(4d/5N)</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Phone:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>+91 8647282929</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Booking Date:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>21/05/21</p>
            </div>
        </div>

        <div className="row bt-drdwn-rw-2">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package ID:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>1234566</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Email:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>serty@yahoo.com</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Payment Receipt:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}><u>View</u></p>
            </div>
        </div>
        
        </div></li>
  </ul>
</div>
    </tr>

    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      <div class="dropdown">
  <button class="btn btn-secondary btn-toggle-view-details" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
  <td ><u>View Details</u></td>
  </button>
  <ul class="dropdown-menu bt-view-details-info-bg" aria-labelledby="dropdownMenu2">
    <li><div class="dropdown-item-text container-fluid cntnr-drpdwn">
        
        <div className="row bt-drdwn-rw-1">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package Name:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>Trip To Goa(4d/5N)</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Phone:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>+91 8647282929</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-1-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Booking Date:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>21/05/21</p>
            </div>
        </div>

        <div className="row bt-drdwn-rw-2">
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-1">
                <p style={{color: "gray", fontSize: "14px"}}>Package ID:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>1234566</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-2">
                <p style={{color: "gray", fontSize: "14px"}}>Email:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}>serty@yahoo.com</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bt-drdwn-rw-2-col-3">
                <p style={{color: "gray", fontSize: "14px"}}>Payment Receipt:</p>
                <p style={{fontSize: "15px", marginLeft: "2rem"}}><u>View</u></p>
            </div>
        </div>
        
        </div></li>
  </ul>
</div>
    </tr>
  </tbody>
</table>
<div className="table-pagination">
<img className="bt-arrow-left" src={LeftArrowP} alt=""/>
<p>Previous</p>
<p>1 &nbsp; 2 &nbsp;3 &nbsp;4 &nbsp;5 &nbsp;6 &nbsp;7 &nbsp;8 &nbsp;</p>
<p>Next</p>
<img className="bt-arrow-right" src={RightArrowP} alt=""/>
</div>
</div>
    )
}

export default CustomPackagesTable;
