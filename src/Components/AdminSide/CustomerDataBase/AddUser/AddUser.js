import React, { useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';
import API from '../../../../Utils/Utils';
import axios from 'axios';


const AddPackage = () => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState('');
  const [active, setActive] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState('');

  const user = { name, role, active, username, password, mobile, city, dob, gender, avatar };

  const history = useHistory();

  const AdminLogOut = () => {
    const token = sessionStorage.removeItem("token");

    if (token == null) {
      history.push("/home");
      return;
    }
  }

  const handleMoveback = () => {
    history.push('/customerdatabase')
  }

  // uploading Images ########################


  const uploadImage = (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);

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

    axios.post(API.UPLOAD_IMAGE, data,
      {
        headers: headers
      },
    )
      .then((response) => {
        if (response.data.status == 1) {
          setAvatar(response.data.data);
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

    console.log(user)
    axios.post(API.ADD_USER,
      user, {
      headers: headers
    })
      .then((resp) => {
        console.log(resp)
        if ('message' in resp.data) {
          alert(resp.data.message);
          history.push('/customerdatabase');
        }
        else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status === 500) {
          alert("User information is already available.");
        }
        if (err.response.status === 401) {
          history.push("/home");
        }
      });

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
          <p style={{ marginLeft: "1rem", fontSize: "12px" }}> {sessionStorage.getItem("user")} <br /><span style={{ cursor: "pointer" }} onClick={AdminLogOut}><small>Logout</small></span></p>
        </div>

      </div>

      {/* ################ ROW-2 ################## */}

      <div className="row cpr-rw-2">

        <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
          <h3>Add User</h3>
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
                          placeholder="name"
                          type="text"
                          onChange={(e) => { setName(e.target.value) }} required
                        />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-1-sub-row-2 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>Username/ Email</h6>
                        <input className="cpr-inputs"
                          name="username"
                          placeholder="username"
                          type="text"
                          onChange={(e) => { setUsername(e.target.value) }} required
                        />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-1-sub-row-3 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>Role</h6>
                        <input className="cpr-inputs"
                          name="role"
                          placeholder="user/ admin"
                          type="text"
                          onChange={(e) => { setRole(e.target.value) }} required
                        />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-1-sub-row-4 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>Mobile</h6>
                        <input className="cpr-inputs"
                          name="mobile"
                          placeholder="mobile"
                          type="text"
                          onChange={(e) => { setMobile(e.target.value) }} required
                        />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-1-sub-row-4 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>Password</h6>
                        <input className="cpr-inputs"
                          name="password"
                          placeholder="password"
                          type="text"
                          onChange={(e) => { setPassword(e.target.value) }} required
                        />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-1-sub-row-5 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>City</h6>
                        <input className="cpr-inputs"
                          name="city"
                          placeholder="city"
                          type="text"
                          onChange={(e) => { setCity(e.target.value) }} required
                        />
                      </div>

                    </div>

                  </div>


                  <div className="col-lg-6 col-md-6 col-sm-12 cpr-rw2-col-2">


                    <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>DOB</h6>
                        <input className="cpr-inputs"
                          name="dob"
                          placeholder="dd/mm/yyyy"
                          type="text"
                          onChange={(e) => { setDob(e.target.value) }} required
                        />

                      </div>

                    </div>

                    <div className="row cpr-rw3-col-2-sub-row-1 cpr-rw3-col-2-sub-rows-all">
                      <div className="col">
                        <h6>Gender</h6>
                        <input className="cpr-inputs"
                          name="gender"
                          placeholder="gender"
                          type="text"
                          onChange={(e) => { setGender(e.target.value) }} required
                        />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-2-sub-row-1 cpr-rw3-col-2-sub-rows-all">
                      <div className="col">
                        <h6>Active Status</h6>
                        <input className="cpr-inputs"
                          name="active"
                          placeholder="true/false"
                          type="text"
                          onChange={(e) => { setActive(e.target.value) }} required
                        />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-2-sub-row-2 cpr-rw3-col-2-sub-rows-all">
                      <div className="col">
                        <h6>Avatar</h6>
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
                        <button type="submit" className="cpr-approve-btn">Add User</button>
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

export default AddPackage;
