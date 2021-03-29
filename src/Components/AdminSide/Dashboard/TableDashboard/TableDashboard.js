import React from 'react';
import "./styles.css";


const TableDashboard = () => {

    const users = [

        {
        id: "1",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<span style={{cursor: "pointer"}}><u>View</u></span>
        },
    
    {
        id: "2",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<span style={{cursor: "pointer"}}><u>View</u></span>
    },
    
    {
        id: "3",
        type: "Booking",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<span style={{cursor: "pointer"}}><u>View</u></span>
    },
    
    {
        id: "4",
        type: "Booking",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<span style={{cursor: "pointer"}}><u>View</u></span>
    },
    
    {
        id: "5",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<span style={{cursor: "pointer"}}><u>View</u></span>
    },

    {
        id: "6",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<span style={{cursor: "pointer"}}><u>View</u></span>
    },

    {
        id: "7",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<span style={{cursor: "pointer"}}><u>View</u></span>
    },

    {
        id: "8",
        type: "Inquiry",
        details: "Ram Singh",
        date: "21/05/19",
        heading:<span style={{cursor: "pointer"}}><u>View</u></span>
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
