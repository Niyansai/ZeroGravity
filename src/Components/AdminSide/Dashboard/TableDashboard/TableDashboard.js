import React, { Fragment } from 'react';
import "./styles.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const TableDashboard = () => {

    

    const users = [

        {
        id: "1",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div> 
        },
    
    {
        id: "2",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div> 
    },
    
    {
        id: "3",
        type: "Booking",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div> 
    },
    
    {
        id: "4",
        type: "Booking",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div> 
    },
    
    {
        id: "5",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div> 
    },

    {
        id: "6",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div> 
    },

    {
        id: "7",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div> 
    },

    {
        id: "8",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div> 
    }
    
    
    ]


    return (

        <div class="table-responsive d-table-top">
                <table class="table ">
  
    <tr className="d-t-header">
      <td>ID</td>
      <td>Type</td>
      <td>Details</td>
      <td>Date</td>
      <td>Action</td>
      <td></td>                            
    </tr>   
      {
          
          users.map((item) => 
          <tr className="d-t-data-row">
               <td>{item.id}</td>
               <td>{item.type}</td>
               <td>{item.details}</td>
               <td>{item.date}</td>
               <td>{item.heading}</td>

          </tr>
          
         

          )
          
          }
     
    
</table>
                </div>


    )
}

export default TableDashboard
