import React, { Fragment, useEffect, useState } from 'react';
import "./styles.css";
import LeftArrowP from "../../../../../Assets/LeftArrowP.png";
import RightArrowP from "../../../../../Assets/RightArrowP.png";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import API from "../../../../../Utils/Utils";
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
import AddIcon from '@material-ui/icons/Add';



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

const TableCoupon = () => {

    const [coupons, setCoupons] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, coupons.length - page * rowsPerPage);

    const history = useHistory();

    // ################## EVENT HANDLERS ######################


    const addCoupon = () => {
        history.push('/coupons/add')
    }


    const toViewCoupons = () => {

        history.push('/coupons/view')

    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //   ############### USEEFFECT ###############


    useEffect(() => {
        loadCoupons();
    }, [])



    // ##################### LOADING FUNCTION SECTION #####################

    const search = async (key) => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/");
            return;
        }

        // token exists 
        axios.get(API.LIST_COUPON, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                setCoupons(response.data.data.filter((item, index) => {
                    return (item.expired.toString().startsWith(key) ||  
                        item.code.toLowerCase().startsWith(key) ||
                        item.discount.toString().startsWith(key));
                }));
            })
            .catch((err) => {
            });
    }


    const loadCoupons = async () => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/home");
            return;
        }

        await axios.get(API.LIST_COUPON, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                setCoupons(response.data.data.reverse());
            })
            .catch((err) => {
            });
            
    }

                // ######################### SORT #######################

    const sort = async (key) => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/home");
            return;
        }

        await axios.get(API.LIST_INQUIRIES, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                setCoupons(response.data.data.sort((a, b) => {
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



    // ######################## DELETE PACKAGE FUNCTION #########################


    const deleteCoupon = async (id) => {
        const token = sessionStorage.getItem("token");

        if (token == null) {
            history.push("/home");
            return;
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        coupons.id = id;

        await axios.get(API.DELETE_COUPON, {
            headers: headers,
            params: {
                id: id
            }
        }
        )
            .then((resp) => {
                if ('data' in resp.data && resp.data.status === 1) {
                    alert(resp.data.message);
                    loadCoupons();
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
                <div className="row pm-table-row-1">
                    <div className="col-lg-3 col-md-1 col-sm-6 ad-rw2-col-2-row-1-col-1" >
                        <h6>All</h6>
                        <div className="all-highlight">

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-1 col-sm-6 ad-rw2-col-2-row-1-col-1 pm-table-search">
                        <span><input placeholder="Search with keyword or label" className="ad-rw1-col-2-input pm-search-input" type="text" onChange={(e) => { search(e.target.value) }} />
                            <SearchIcon /></span>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-3 pm-sortable">
                    <select className="cpr-inputs add-booking-inputs bokng-input-toggle sort-cdb form-select" name="sort-option" type="text" onClick={(e) => { sort(e.target.value) }}>
                           <option selected>Sort By</option>
                            <option value="discount">Discount</option>
                            <option value="code">Code</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 ad-rw2-col-2-row-1-col-4">
                        <Link to="/coupons/add"><button onClick={addCoupon} className="btn-delete-adb pm-add-btn"><AddIcon /><span>ADD COUPON</span></button></Link>
                    </div>

                </div>

            </div>
            <div className="row pm-table-row-2">
                <TableContainer className="container paper-container-p-table">
                    <Table aria-label="custom pagination table">
                        <TableHead className="table-head-pm">
                            <TableRow>
                                <StyledTableCell align="center">Id</StyledTableCell>
                                <StyledTableCell align="center">Code</StyledTableCell>
                                <StyledTableCell align="center">Discount</StyledTableCell>
                                <StyledTableCell align="center">Expired</StyledTableCell>
                                <StyledTableCell align="center">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? coupons.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : coupons
                            ).map((item, index) => (
                                <TableRow className="table-details-pm" key={index}>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {item._id}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {item.code}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {item.discount}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {item.expired.toString()}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        <div className="d-tble-icons"><Link to={`/coupons/view/${item._id}`}><span className="view-icon"><VisibilityIcon /></span></Link> &nbsp;<Link className="edit-icon-link-pm" to={`/coupons/edit/${item._id}`}><span className="edit-icon-pm"><EditIcon /></span> </Link> &nbsp;<span onClick={(id) => deleteCoupon(item._id)} className="delete-icon"><DeleteIcon /></span></div>
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
                                    count={coupons.length}
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

export default TableCoupon
