import React, { useState, useEffect } from 'react';
import img from "../../../Assets/img2.png";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
import axios from 'axios';
import API from '../../../Utils/Utils';
import HotelIcon from '@material-ui/icons/Hotel';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import CheckBox from './Checkbox';


const PackageSearch = () => {

    const [packageOf, setPackages] = useState([]);
    const [name, setName] = useState();
    const [starting_price, setStarting] = useState();
    const [ending_price, setEnding] = useState();
    const [meal, setMeal] = useState([
        { id: 1, value: "breakfast", isChecked: false },
        { id: 2, value: "lunch", isChecked: false },
        { id: 3, value: "dinner", isChecked: false },
        { id: 4, value: "brunch", isChecked: false },
    ]);
    const [activities, setActivities] = useState([
        { id: 1, value: "trekking", isChecked: false },
        { id: 2, value: "rock climbing", isChecked: false },
        { id: 3, value: "sky diving", isChecked: false },
        { id: 4, value: "swimming", isChecked: false },
        { id: 5, value: "sea diving", isChecked: false }
    ])
    const [tags, setTags] = useState([
        { id: 1, value: "nature", isChecked: false },
        { id: 2, value: "hills", isChecked: false },
        { id: 3, value: "sea", isChecked: false },
        { id: 4, value: "ocean", isChecked: false },
        { id: 5, value: "greenary", isChecked: false },
        { id: 6, value: "snow", isChecked: false },
    ]);
    const [transport, setTransport] = useState([
        { id: 1, value:"bus", isChecked: false },
        { id: 2, value:"auto", isChecked: false },
        { id: 3, value:"airway", isChecked: false },
        { id: 4, value:"railway", isChecked: false },
        { id: 5, value:"waterway", isChecked: false },
        { id: 6, value:"boat", isChecked: false },
    ]);
    const [special, setSpecial] = useState([
        { id: 1, value:"wheelchair", isChecked: false },
        { id: 2, value:"medical equipment", isChecked: false },
        { id: 3, value:"breather", isChecked: false },
    ]);
    const [rating, setRating] = useState();
    const [stay, setStay] = useState([
        { id: 1, value:"4 members", isChecked: false },
        { id: 1, value:"3 members", isChecked: false },
        { id: 1, value:"2 members", isChecked: false },
        { id: 1, value:"2 families", isChecked: false },
    ]);

    const query = { name, starting_price, ending_price, meal, activities, tags, transport, special, rating, stay };

    const history = useHistory();

    useEffect(() => {
        loadPackage();
    }, [])


    const handleActivityCheckboxes = (e) => {
        let a = activities
        a.forEach(act => {
            if (act.value === e.target.value)
                act.isChecked = e.target.checked
        })
        setActivities(a);
        searchPackage();
    }

    const handleMealCheckboxes = (e) => {
        let a = meal
        a.forEach(act => {
            if (act.value === e.target.value)
                act.isChecked = e.target.checked
        })
        setMeal(a);
        searchPackage();
    }

    const handleTransportCheckboxes = (e) => {
        let a = transport
        a.forEach(act => {
            if (act.value === e.target.value)
                act.isChecked = e.target.checked
        })
        setTransport(a);
        searchPackage();
    }

    const handleTagCheckboxes = (e) => {
        let a = tags
        a.forEach(act => {
            if (act.value === e.target.value)
                act.isChecked = e.target.checked
        })
        setTags(a);
        searchPackage();
    }

    const handleSpecialCheckboxes = (e) => {
        let a = special
        a.forEach(act => {
            if (act.value === e.target.value)
                act.isChecked = e.target.checked
        })
        setSpecial(a);
        searchPackage();
    }

    const handleStayCheckboxes = (e) => {
        let a = stay
        a.forEach(act => {
            if (act.value === e.target.value)
                act.isChecked = e.target.checked
        })
        setStay(a);
        searchPackage();
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
                setPackages(response.data.data);
            })
            .catch((err) => {
            });
    }

    const more = (id) => {
        history.push(`/packagedetails/${id}`)
    }

    const book = (id) => {

    }

    const addQuery = async (val) => {
        const token = sessionStorage.getItem("token");

        if (token == null) {
            history.push("/home");
            return;
        }

        await axios.get(API.SEARCH_PACKAGE, {
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                "name": val
            }
        })
            .then((response) => {
                setPackages(response.data.data);
            })
            .catch((err) => {
            });
    }

    const searchPackage = async () => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/home");
            return;
        }

        let a = [];
        activities.map((item, k) => {
            if (item.isChecked === true)
                a.push(item.value);
        })
        query.activities = a;

        a = [];
        meal.map((item, k) => {
            if (item.isChecked === true)
                a.push(item.value);
        })
        query.meal = a;


        a = [];
        transport.map((item, k) => {
            if (item.isChecked === true)
                a.push(item.value);
        })
        query.transport = a;


        a = [];
        tags.map((item, k) => {
            if (item.isChecked === true)
                a.push(item.value);
        })
        query.tags = a;


        a = [];
        special.map((item, k) => {
            if (item.isChecked === true)
                a.push(item.value);
        })
        query.special = a;


        a = [];
        stay.map((item, k) => {
            if (item.isChecked === true)
                a.push(item.value);
        })
        query.stay = a;

        console.log(query)

        await axios.get(API.SEARCH_PACKAGE, {
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: query
        })
            .then((response) => {
                console.log(response.data.data)
                setPackages(response.data.data);
            })
            .catch((err) => {
            });
    }

    return (

        <div className="container-fluid pkg-details-container" >

            {/* ############ LINE DIVIDER ########### */}

            <div className="row head-diveder-lin-pkg-row">
                <div className="col">
                    <div className="head-diveder-lin-pkg">

                    </div>
                </div>
            </div>

            {/* ############ ROW-2 ########### */}

            <div style={{ marginTop: "2rem" }} className="row pkgsearch-container">
                <div className="col-lg-3 col-md-6 col-sm-12"></div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h4>Your Preferences</h4>
                    <p style={{ fontSize: "12px", marginLeft: "18px" }}>Showing results {packageOf.length}</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <input onChange={(e) => addQuery(e.target.value)} style={{ border: "none", outline: "none", borderBottom: "2px solid gray", marginBottom: "1rem" }} className="inputs-payment" placeholder="Search for Packages" type="text" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <ArrowBackIcon />
                </div>
            </div>

            {/* ############ ROW-3 ########### */}

            <div style={{ marginBottom: "1rem", marginTop: "20px" }} className="row">
                <div className="col-3" style={{ marginLeft: "20px" }}>
                    <input class="form-control m-1" name="starting_price" onChange={(e) => {setStarting(e.target.value)}} placeholder="starting price" />
                    <input class="form-control m-1" name="ending_price" onChange={(e) => {setEnding(e.target.value)}} placeholder="ending price" />
                    <input class="form-control m-1" name="rating" onChange={(e) => {setRating(e.target.value)}} placeholder="rating 1 to 5" />
                    <h5>Activities</h5>
                    <ul>
                        {
                            activities.map((activity, index) => {
                                return (<CheckBox key={index} handleCheckChieldElement={handleActivityCheckboxes}  {...activity} />)
                            })
                        }
                    </ul>

                    <h5>Meals</h5>
                    <ul>
                        {
                            meal.map((m, index) => {
                                return (<CheckBox key={index} handleCheckChieldElement={handleMealCheckboxes}  {...m} />)
                            })
                        }
                    </ul>

                    <h5>Transport</h5>
                    <ul>
                        {
                            transport.map((item, index) => {
                                return (<CheckBox key={index} handleCheckChieldElement={handleTransportCheckboxes}  {...item} />)
                            })
                        }
                    </ul>

                    <h5>Tags</h5>
                    <ul>
                        {
                            tags.map((item, index) => {
                                return (<CheckBox key={index} handleCheckChieldElement={handleTagCheckboxes}  {...item} />)
                            })
                        }
                    </ul>

                    <h5>Specials</h5>
                    <ul>
                        {
                            special.map((item, index) => {
                                return (<CheckBox key={index} handleCheckChieldElement={handleSpecialCheckboxes}  {...item} />)
                            })
                        }
                    </ul>

                    <h5>Stay</h5>
                    <ul>
                        {
                            stay.map((item, index) => {
                                return (<CheckBox key={index} handleCheckChieldElement={handleStayCheckboxes}  {...item} />)
                            })
                        }
                    </ul>

                </div>
                <div className="col">
                    {
                        packageOf.map((val, index) => {
                            return (
                                <div className="container-fluid" style={{ marginTop: "15px", verticalAlign: "center" }}>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-md-12">
                                            {
                                                val.photos.length > 0 &&
                                                <img className="img-fluid" style={{ height: "250px", width: "250px" }} src={API.GET_IMAGE + "?image=" + val.photos[0]} alt="" />
                                            }
                                            {
                                                val.photos.length === 0 &&
                                                <img className="img-fluid" style={{ height: "250px" }} src={img} alt="" />
                                            }
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="row">
                                                <div className="col">
                                                    <h6>{val.name}</h6>
                                                </div></div>
                                            <div className="row"><div className="col">
                                                <p style={{ color: "gray", fontSize: "12px" }} >{val.description}</p>
                                            </div></div>
                                            <div className="row"><div className="col">
                                                <h6>{val.stay.join()}</h6>
                                            </div></div>
                                            <div className="row"><div className="col">
                                                <p style={{ color: "gray", fontSize: "12px" }}>From</p>
                                            </div></div>
                                            <div className="row"><div className="col">
                                                <h6 style={{ color: "#ff4f4f" }}>{val.starting_price}/- <small>per person</small></h6>
                                            </div></div>

                                            <div className="row">
                                                {val.activities.length > 0 &&
                                                    val.activities.map((item, ind) => {
                                                        return (<div className="col-lg-3 col-md-6 col-sm-12">
                                                            <p style={{ color: "gray", fontSize: "10px" }}>{item.toString().toUpperCase()}</p>
                                                        </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <button onClick={() => { more(val._id) }} style={{ background: "none", width: "100%", height: "40px", outline: "none", padding: "5px" }}>More</button>
                                                </div>
                                                <div className="col">
                                                    <button onClick={() => { book(val._id) }} style={{ background: "#ff4f4f", width: "100%", height: "40px", border: "none", color: "white", padding: "5px", outline: "none" }}>Book</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            {
                                                val.meal.length > 0 &&
                                                <div style={{ marginTop: "1rem" }} className="row">
                                                    <div style={{ marginBottom: "1rem" }} style={{ marginBottom: "1rem" }} className="col d-flex">
                                                        <HotelIcon style={{ color: "gray" }} />
                                                        <p style={{ color: "gray", marginLeft: "10px", fontSize: "12px" }}>Meals<br />Included</p>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                val.stay.length > 0 &&
                                                <div className="row">
                                                    <div style={{ marginBottom: "1rem" }} className="col d-flex">
                                                        <RestaurantMenuIcon style={{ color: "gray" }} />
                                                        <p style={{ color: "gray", marginLeft: "10px", fontSize: "12px" }}>Hotels<br />Included</p>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                val.transport.length > 0 &&
                                                < div className="row">
                                                    <div style={{ marginBottom: "1rem" }} className="col d-flex">
                                                        <EmojiTransportationIcon style={{ color: "gray" }} />
                                                        <p style={{ color: "gray", marginLeft: "10px", fontSize: "12px" }}>Transport<br />Included</p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default PackageSearch
