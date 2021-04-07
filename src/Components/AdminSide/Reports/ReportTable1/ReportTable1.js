import React, { Fragment, useEffect, useState } from 'react';
import "./styles.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import API from "../../../../Utils/Utils";
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import { BorderBottom } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link, useParams } from 'react-router-dom';
import FilterListIcon from '@material-ui/icons/FilterList';




const useStyles = makeStyles({
  table: {
    minWidth: 650,
    border: "none"
  },
});

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));


//   ############### TABLE-HEAD-STYLE ##################

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "none",
    color: "gray",
    fontSize: "12px",
    border: "none",
    borderBottom: "2px solid gray"
  },

  body: {
    fontSize: 14,
  },
}))(TableCell);


//   ################# TABLE-PAGINATION FUNCTION ###################

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;


  // ###################### EVENT-HANDLERS #####################

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};



//   ################# MAIN-TABLE FUNCTION ###################

const ReportTable = () => {
  const classes = useStyles();
  const [bookingOf, setBookingOf] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, bookingOf.length - page * rowsPerPage);

  const history = useHistory();

  const { id } = useParams();


// ################### STATIC DATA ####################


const ROWS = [{
  id: 1,
  name: "GoaTrip",
  date: "21-04-2021",
  members: 10,
  amount: 20000,
  actions:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>  
},
{
  id: 2,
  name: "GoaTrip",
  date: "21-04-2021",
  members: 10,
  amount: 20000,
  actions:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>  
},
{
  id: 3,

  name: "GoaTrip",
  date: "21-04-2021",
  members: 10,
  amount: 20000,
  actions:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>  
},
{
  id: 4,
  name: "GoaTrip",
  date: "21-04-2021",
  members: 10,
  amount: 20000,
  actions:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>  
},
{
  id: 5,
  name: "GoaTrip",
  date: "21-04-2021",
  members: 10,
  amount: 20000,
  actions:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>  
},
{
  id: 6,
  name: "GoaTrip",
  date: "21-04-2021",
  members: 10,
  amount: 20000,
  actions:<div className="d-tble-icons"><span  className="view-icon"><VisibilityIcon/></span> &nbsp;<span className="edit-icon"><EditIcon/></span> &nbsp;<span className="delete-icon"><DeleteIcon/></span></div>  
},



]



  // ################## EVENT HANDLERS ######################



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   ############### USEEFFECT ###############


  useEffect(() => {
    loadBooking();
  }, [])



  // ##################### LOADING FUNCTION SECTION #####################

  const search = async (key) => {
    const token = sessionStorage.getItem("token");
    if (token == null) {
      history.push("/");
      return;
    }

    // token exists 
    axios.get(API.LIST_BOOKINGS, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then((response) => {
        console.log(response.data.data)
        setBookingOf(response.data.data.filter((item, index) => {
          return item.name.startsWith(key);
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const loadBooking = async () => {
    const token = sessionStorage.getItem("token");
    if (token == null) {
      history.push("/home");
      return;
    }

    await axios.get(API.LIST_BOOKINGS, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then((response) => {
        console.log(response.data.data)
        setBookingOf(response.data.data.reverse());
      })
      .catch((err) => {
        console.log(err)
      });
  }


  // ######################## DELETE BOOKING FUNCTION #########################


  const deleteBooking = async (id) => {
    const token = sessionStorage.getItem("token");

    if (token == null) {
      history.push("/home");
      return;
    }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }

    bookingOf.id = id;

    await axios.get(API.DELETE_BOOKING, {
      headers: headers,
      params: {
        id: id
      }
    }
    )
      .then((resp) => {
        console.log(resp)
        if ('data' in resp.data && resp.data.status === 1) {
          alert(resp.data.message);
          loadBooking();
        }
      })
      .catch((err) => {
        alert("Something went wrong");
      })
  }


  // ####################### TABLE UI SECTION #######################


  return (
    <Fragment>
      <div className="container-fluid pm-table-search">
        <div className="row pm-table-row-1 r-tble-rw1">
          <div className="col-lg-11 col-md-11 col-sm-12 r-tble-rw1-col-only">
            <IconButton className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><FilterListIcon/></IconButton>
            <ul class="dropdown-menu filter-dropdown" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item">Monthly</a></li>
                <li><a class="dropdown-item">Weekly</a></li>
            </ul>
          </div>
          <p className="ad-rw1-col-2-p">Reports</p>
          <TableContainer component={Paper} >
      <Table  aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Trip</TableCell>
            <TableCell align="center">Total Number Of Members</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Total Income</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {ROWS.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.members}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

      </div>
      <div className="row pm-table-row-2">
        
      </div>
    </Fragment>

  )
}

export default ReportTable;
