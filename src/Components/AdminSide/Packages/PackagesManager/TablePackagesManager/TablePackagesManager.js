import React from 'react';
import "./styles.css";
import LeftArrowP from "../../../../../Assets/LeftArrowP.png";
import RightArrowP from "../../../../../Assets/RightArrowP.png";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';


const TablePackagesManager   = () => {

    const history = useHistory();

    const toEditPageClick = () => {
        history.push('/packages/edit')
    }


    const toViewPackages = () => {

        history.push('/packages/view')

    }


    const users = [

                        {
                        id: "0123",
                        package_name: "Trip to Goa",
                        destination: "Goa",
                        days: "4D/5N",
                        cost_person:"15000",
                        rating: "4.5/5",
                        total_bookings: '10',
                        action:<div className="d-tble-icons"><span onClick={toViewPackages} className="view-icon"><VisibilityIcon/></span> &nbsp;<span onClick={toEditPageClick} className="edit-icon-pm"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>                         },

                        {
                            id: "0123",
                            package_name: "Trip to Goa",
                            destination: "Goa",
                            days: "4D/5N",
                            cost_person:"15000",
                            rating: "4.5/5",
                            total_bookings: '10',
                            action:<div className="d-tble-icons"><span onClick={toViewPackages} className="view-icon"><VisibilityIcon/></span> &nbsp;<span onClick={toEditPageClick} className="edit-icon-pm"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>
                                                     },

                            {
                                id: "0123",
                                package_name: "Trip to Goa",
                                destination: "Goa",
                                days: "4D/5N",
                                cost_person:"15000",
                                rating: "4.5/5",
                                total_bookings: '10',
                                action:<div className="d-tble-icons"><span onClick={toViewPackages} className="view-icon"><VisibilityIcon/></span> &nbsp;<span onClick={toEditPageClick} className="edit-icon-pm"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>
                                                             },

                                {
                                    id: "0123",
                                    package_name: "Trip to Goa",
                                    destination: "Goa",
                                    days: "4D/5N",
                                    cost_person:"15000",
                                    rating: "4.5/5",
                                    total_bookings: '10',
                                    action:<div className="d-tble-icons"><span onClick={toViewPackages} className="view-icon"><VisibilityIcon/></span> &nbsp;<span onClick={toEditPageClick} className="edit-icon-pm"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>
                                                                     },

                                    {
                                        id: "0123",
                                        package_name: "Trip to Goa",
                                        destination: "Goa",
                                        days: "4D/5N",
                                        cost_person:"15000",
                                        rating: "4.5/5",
                                        total_bookings: '10',
                                        action:<div className="d-tble-icons"><span onClick={toViewPackages} className="view-icon"><VisibilityIcon/></span> &nbsp;<span onClick={toEditPageClick} className="edit-icon-pm"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>
                                                                            },

                                        {
                                            id: "0123",
                                            package_name: "Trip to Goa",
                                            destination: "Goa",
                                            days: "4D/5N",
                                            cost_person:"15000",
                                            rating: "4.5/5",
                                            total_bookings: '10',
                                            action:<div className="d-tble-icons"><span onClick={toViewPackages} className="view-icon"><VisibilityIcon/></span> &nbsp;<span onClick={toEditPageClick} className="edit-icon-pm"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>
                                                                                     },

                                            {
                                                id: "0123",
                                                package_name: "Trip to Goa",
                                                destination: "Goa",
                                                days: "4D/5N",
                                                cost_person:"15000",
                                                rating: "4.5/5",
                                                total_bookings: '10',
                                                action:<div className="d-tble-icons"><span onClick={toViewPackages} className="view-icon"><VisibilityIcon/></span> &nbsp;<span onClick={toEditPageClick} className="edit-icon-pm"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div> 
                                                                                            },

                                                {
                                                    id: "0123",
                                                    package_name: "Trip to Goa",
                                                    destination: "Goa",
                                                    days: "4D/5N",
                                                    cost_person:"15000",
                                                    rating: "4.5/5",
                                                    total_bookings: '10',
                                                    action:<div className="d-tble-icons"><span onClick={toViewPackages} className="view-icon"><VisibilityIcon/></span> &nbsp;<span onClick={toEditPageClick} className="edit-icon-pm"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div> 
                                                                                                    }, 
    
    ]


    return (

        <div class="table-responsive d-table-top">
                <table class="table ">
  
    <tr className="d-t-header pm-t-header">
      <td>ID</td>
      <td>Package Name</td>
      <td>Destination</td>
      <td>Days</td>
      <td>Cost/Person</td>
      <td>Rating</td>
      <td>Total Bookings</td>
      <td>Action</td>                           
    </tr>   
      {
          
          users.map((item) => 
          <tr className="d-t-data-row pm-t-row">
               <td>{item.id}</td>
               <td>{item.package_name}</td>
               <td>{item.destination}</td>
               <td>{item.days}</td>
               <td>{item.cost_person}</td>
               <td>{item.rating}</td>
               <td>{item.total_bookings}</td>
               <td className="icon-text-deconone">{item.action}</td>
          </tr>
                
          )
          
          }
     
    
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

export default TablePackagesManager 
