import React, { useState } from 'react'
import "./styles.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RightArrowP from '../../../../Assets/RightArrowP.png';
import LeftArrowP from "../../../../Assets/LeftArrowP.png";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


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
      <div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>       <td></td>

    </tr>
    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      <div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>       
    </tr>
    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      <div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>       
    </tr>
    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      <div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>       
    </tr>
    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      <div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>       
    </tr>

    <tr className="bt-row">
      <td>0123</td>
      <td>Ranansh</td>
      <td>Goa</td>
      <td>Hyderabad</td>
      <td>2</td>
      <td>21/3/21</td>
      <div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>       
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
