import React, { Fragment, useEffect, useState } from 'react';
import "./styles.css";
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
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useParams } from 'react-router-dom';


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

const BookingTable = () => {

  const [bookingOf, setBookingOf] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, bookingOf.length - page * rowsPerPage);

  const history = useHistory();


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    loadBooking();
  }, [])



  const search = async (key) => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("id");

    if (token == null) {
      history.push("/");
      return;
    }

    // token exists 
    axios.get(API.GET_USER_BOOKING, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      params: {
        "id": userId
      }
    })
      .then((response) => {
        setBookingOf(response.data.data.filter((item, index) => {
          return (item.status.toLowerCase().startsWith(key) ||
            item.payment_mode.toLowerCase().startsWith(key) ||
            item.transaction.toLowerCase().startsWith(key) ||
            item._id.toLowerCase().startsWith(key) ||
            item.userData[0].name.toLowerCase().startsWith(key) ||
            item.packageData[0].name.toLowerCase().startsWith(key)
          );
        }));
      })
      .catch((err) => {
      });
  }

  const sort = async (key) => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("id");

    if (token == null) {
      history.push("/home");
      return;
    }

    await axios.get(API.GET_USER_BOOKING, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      params: {
        "id": userId
      }
    })
      .then((response) => {

        setBookingOf(response.data.data.sort((a, b) => {
          let aa = a[key].toString().toLowerCase(),
            bb = b[key].toString().toLowerCase();

          if (aa < bb) return -1;
          if (bb < aa) return 1;
          return 0;
        }));
      })
      .catch((err) => {
      });
  }

  const loadBooking = async () => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("id");

    if (token == null) {
      history.push("/home");
      return;
    }

    await axios.get(API.GET_USER_BOOKING, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      params: {
        "id": userId
      }
    })
      .then((response) => {
        setBookingOf(response.data.data.reverse());
      })
      .catch((err) => {
      });
  }

  return (
    <Fragment>
      <div className="container-fluid pm-table-search">
        <div className="row pm-table-row-1">
          <div className="col-lg-3 col-md-1 col-sm-6 ad-rw2-col-2-row-1-col-1" >
            
          </div>
          <div className="col-lg-3 col-md-1 col-sm-6 ad-rw2-col-2-row-1-col-1 pm-table-search">
            <span><input placeholder="Search with keyword or label" className="ad-rw1-col-2-input pm-search-input" type="text" onChange={(e) => { search(e.target.value) }} />
              <SearchIcon /></span>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-3 pm-sortable">
            <div id="basic-ddown-change" className="d-flex">
              <select className="cpr-inputs add-booking-inputs bokng-input-toggle sort-cdb form-select" name="sort-option" type="text" onClick={(e) => { sort(e.target.value) }}>
                <option selected>Sort By</option>
                <option value="_id">Id</option>
                <option value="user">User</option>
                <option value="package">Package</option>
                <option value="price">Price</option>
                <option value="coupon">Coupon</option>
                <option value="status">Status</option>
              </select>
            </div>
          </div>

        </div>

      </div>
      <div className="row pm-table-row-2">
        <TableContainer className="container paper-container-p-table">
          <Table aria-label="custom pagination table">
            <TableHead className="table-head-pm">
              <TableRow>
                <StyledTableCell align="center">Package</StyledTableCell>
                <StyledTableCell align="center">Payment_Mode</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Coupon</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? bookingOf.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : bookingOf
              ).map((item, index) => (
                <TableRow className="table-details-pm" key={index}>
                  <TableCell style={{ width: 160 }} align="center">
                    {item.packageData && item.packageData.length > 0 && item.packageData[0].name}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {item.payment_mode}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {item.price}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {item.couponData && item.couponData.length > 0 && item.couponData[0].code}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {item.status}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    <div className="d-tble-icons">
                      <Link to={`/dashboard/booking/view/${item._id}`}><span className="view-icon">View Details</span>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter className="p-table-footer">
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={12}
                  count={bookingOf.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>

      </div>
    </Fragment>

  )
}

export default BookingTable
