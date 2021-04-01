import React from 'react';
import "./styles.css";


const SmallTableDashboard = () => {


    const trips = [

        {
        id: "1",
        type: "Trip to Goa",
        total: "200"
        },
    
    {
        id: "2",
        type: "Trip to Goa",
        total: "200"
    },
    
    {
        id: "3",
        type: "Trip to Goa",
        total: "200"
    },
    
    {
        id: "4",
        type: "Trip to Goa",
        total: "200"
    },
    {
        id: "5",
        type: "Trip to Goa",
        total: "200"
    },
    {
        id: "6",
        type: "Trip to Goa",
        total: "200"
    },
]


    return (
        <div class="table-responsive">
        <table class="table">
          <tr class="d-st-header">
              <td>ID</td>
              <td>Type</td>
              <td>Total Bookings</td>
          </tr>

{
    trips.map((item) => 
    <tr className="d-st-data-row">
    <td >{item.id}</td>
    <td>{item.type}</td>
    <td>{item.total}</td>
    </tr>
    )
}
        </table>
      </div>
    )
}

export default SmallTableDashboard;
