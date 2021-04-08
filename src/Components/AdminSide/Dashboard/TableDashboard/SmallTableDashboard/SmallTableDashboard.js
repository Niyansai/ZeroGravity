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

const TablePackagesManager = () => {

    const [packagesOf, setPackagesOf] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, packagesOf.length - page * rowsPerPage);

    const history = useHistory();

    const { id } = useParams();


    // ################## EVENT HANDLERS ######################


    const addPackPage = () => {
        history.push('/packages/add')
    }


    const toViewPackages = () => {

        history.push('/packages/view')

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
        loadPackage();
    }, [])



    // ##################### LOADING FUNCTION SECTION #####################

    const search = async (key) => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/");
            return;
        }

        // token exists 
        axios.get(API.LIST_PACKAGES, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                console.log(response.data.data)
                setPackagesOf(response.data.data.filter((item, index) => {
                    return item.name.startsWith(key);
                }));
            })
            .catch((err) => {
                console.log(err);
            });
    }


    const loadPackage = async () => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/home");
            return;
        }

        await axios.get(API.LIST_PACKAGES, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                console.log(response.data.data)
                setPackagesOf(response.data.data.reverse());
            })
            .catch((err) => {
                console.log(err)
            });
    }


    // ######################## DELETE PACKAGE FUNCTION #########################


    const deletePackage = async (id) => {
        const token = sessionStorage.getItem("token");

        if (token == null) {
            history.push("/home");
            return;
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        packagesOf.id = id;

        await axios.get(API.DELETE_PACKAGE, {
            headers: headers,
            params: {
                id: id
            }
        }
        )
            .then((resp) => {
                if ('data' in resp.data && resp.data.status === 1) {
                    alert(resp.data.message);
                    loadPackage();
                }
            })
            .catch((err) => {
                alert("Something went wrong");
            })
    }


    // ####################### TABLE UI SECTION #######################


    return (
        <Fragment>
            <div className="row pm-table-row-2">
                <TableContainer className="container paper-container-p-table">
                    <Table aria-label="custom pagination table">
                        <TableHead className="table-head-pm">
                            <TableRow>
                            <StyledTableCell align="center">Id</StyledTableCell>
                                <StyledTableCell align="center">Package Name</StyledTableCell>
                                <StyledTableCell align="center">Address</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? packagesOf.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : packagesOf
                            ).map((item, index) => (
                                <TableRow className="table-details-pm" key={index}>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {item._id.substring(0, 5) + "..."}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {item.name}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {item.address}
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </Fragment>

    )
}

export default TablePackagesManager
