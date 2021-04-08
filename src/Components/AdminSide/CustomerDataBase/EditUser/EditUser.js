import React, { useEffect, useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, useParams } from 'react-router-dom';
import API from '../../../../Utils/Utils';
import axios from 'axios';
import { ContactlessOutlined } from '@material-ui/icons';



const EditUser = () => {

    const { id } = useParams();

    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [img, setAvatar] = useState("");
    const [user, setUser] = useState({
        role: "",
        active: "",
        name: "",
        username: "",
        mobile: "",
        city: "",
        dob: "",
        gender: "",
        id: "",
        avatar: ""
    });

    const { name, role, username, mobile, city, dob, gender, active, avatar } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();

    }, [])

    const AdminLogOut = () => {
        const token = sessionStorage.removeItem("token");

        if (token == null) {
            history.push("/home");
            return;
        }
    }


    // ################### POST UPDATED FORM SUBMIT #####################

    const submitForm = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");

        if (token == null) {
            history.push("/home");
            return;
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        user.id = id;
        user.avatar = img;

        axios.post(API.UPDATE_USER,
            user, {
            headers: headers
        }
        )
            .then((resp) => {
                if ('message' in resp.data) {
                    alert(resp.data.message);
                    if (resp.data.status == 1)
                        history.push('/customerdatabase');
                }
            })
            .catch((err) => {
                if (err.response.status === 500) {
                    alert("User information is already available.");
                }
                if (err.response.status === 401) {
                    history.push("/home");
                }
            });

    }


    //   ######################### GET DATA FOR AUTOMATIC UPLOAD OF DATA #############################



    const loadUser = async () => {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            history.push("/");
            return;
        }

        // token exists 
        const result = await axios.get(API.GET_USER, {
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                "id": id
            }
        });

        setUser(result.data.data)
        if (result.data.data && result.data.data.avatar)
            setAvatar(result.data.data.avatar);
    }


    const uploadImage = (e) => {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        data.append('id', id);

        if (!data) {
            console.log("bye");
            return;
        }

        setLoading("Uploading a file");
        const token = sessionStorage.getItem("token");
        if (token == null) {
            alert("not authorized to upload")
            return;
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        axios.post(API.UPLOAD_USER_IMAGE, data,
            {
                headers: headers
            },
        )
            .then((response) => {
                if (response.data.data.avatar) {
                    setAvatar(response.data.data.avatar);
                    setLoading("File uploaded");
                }
                else {
                    setLoading("File uploading failed");
                }
            })
            .catch((error) => {
                setLoading("File uploading failed");
            })
    }

    // ############################# OnClick Handlers ###############################

    const handleMoveback = () => {
        history.push('/customerdatabase')
    }


    return (

        <div className="container cpr-cntnr">


            {/* ################ ROW-1 ################## */}

            <div className="row cpr-rw-1">

                <div className="col-lg-10 col-md-6 col-sm-12 cpr-rw1-col-1">

                    <img className="img-fluid cpr-rw1-col-1-logo" src={GravityLogo} alt="" />

                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 cpr-rw1-col-2">
                    <Avatar src={RealProfilePic} />
                    <p style={{ marginLeft: "1rem", fontSize: "12px" }}> {sessionStorage.getItem("user")} <br /><span><small> {AdminLogOut}</small></span></p>

                </div>

            </div>

            {/* ################ ROW-2 ################## */}

            <div className="row cpr-rw-2">

                <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
                    <h3>Edit User</h3>
                </div>


                <div className="col-lg-2 col-md-6 col-sm-6 cpr-rw-2-col-2">

                    <div onClick={handleMoveback} className="bg-black-bck-arw cpr-back-arrow">
                        <ArrowBackIosIcon />
                    </div>
                    <p><small>Back</small></p>
                </div>
            </div>

            {/* ################ ROW-3 ################## */}

            <div className="row cpr-rw-3">

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={e => submitForm(e)}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 cpr-rw2-col-1">


                                        <div className="row cpr-rw3-col-1-sub-row-1 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6 >User Name</h6>
                                                <input className="cpr-inputs"
                                                    name="name"
                                                    value={name}
                                                    placeholder="name"
                                                    type="text"
                                                    onChange={e => onInputChange(e)} required
                                                />
                                            </div>
                                        </div>

                                        <div className="row cpr-rw3-col-1-sub-row-2 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6>Username/ Email</h6>
                                                <input className="cpr-inputs"
                                                    name="username"
                                                    value={username}
                                                    placeholder="username"
                                                    type="text"
                                                    onChange={e => onInputChange(e)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row cpr-rw3-col-1-sub-row-3 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6>Role</h6>
                                                <input className="cpr-inputs"
                                                    name="role"
                                                    value={role}
                                                    placeholder="user/ admin"
                                                    type="text"
                                                    onChange={e => onInputChange(e)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row cpr-rw3-col-1-sub-row-3 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6>Active Status</h6>
                                                <input className="cpr-inputs"
                                                    name="active"
                                                    value={active}
                                                    placeholder="true/ false"
                                                    type="text"
                                                    onChange={e => onInputChange(e)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row cpr-rw3-col-1-sub-row-4 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6>Mobile</h6>
                                                <input className="cpr-inputs"
                                                    name="mobile"
                                                    value={mobile}
                                                    placeholder="mobile"
                                                    type="text"
                                                    onChange={e => onInputChange(e)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row cpr-rw3-col-1-sub-row-5 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6>City</h6>
                                                <input className="cpr-inputs"
                                                    name="city"
                                                    value={city}
                                                    placeholder="city"
                                                    type="text"
                                                    onChange={e => onInputChange(e)}
                                                />
                                            </div>

                                        </div>



                                        <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                                                <h6>DOB</h6>
                                                <input className="cpr-inputs"
                                                    name="dob"
                                                    value={dob}
                                                    placeholder="dd/mm/yyyy"
                                                    type="text"
                                                    onChange={e => onInputChange(e)}
                                                />

                                            </div>

                                        </div>

                                        <div className="row cpr-rw3-col-2-sub-row-1 cpr-rw3-col-2-sub-rows-all">
                                            <div className="col">
                                                <h6>Gender</h6>
                                                <input className="cpr-inputs"
                                                    name="gender"
                                                    value={gender}
                                                    placeholder="gender"
                                                    type="text"
                                                    onChange={e => onInputChange(e)}
                                                />
                                            </div>
                                        </div>

                                    </div>


                                    <div className="col-lg-6 col-md-6 col-sm-12 cpr-rw2-col-2">


                                        <div className="row cpr-rw3-col-2-sub-row-2 cpr-rw3-col-2-sub-rows-all">
                                            <div className="col">
                                                <h6>Avatar</h6>
                                                <img style={{ width: "250px", paddingTop: "10px", paddingBottom: "10px" }} src={API.GET_IMAGE + "?image=" + img}></img>
                                            </div>
                                        </div>

                                        <div className="row cpr-rw3-col-2-sub-row-2 cpr-rw3-col-2-sub-rows-all">
                                            <div className="col">
                                                <input className="cpr-inputs"
                                                    name="avatar"
                                                    placeholder="photos"
                                                    type="file"
                                                    onChange={uploadImage}
                                                />
                                                <p>{loading}</p>
                                            </div>
                                        </div>

                                        <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                            <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                                <button type="submit" className="cpr-approve-btn">Update User</button>
                                            </div>

                                        </div>

                                        <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                            <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                                <button onClick={() => history.push('/customerdatabase')} type="cancel" className="cpr-cancel-btn">Cancel</button>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default EditUser;
