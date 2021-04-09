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
  const [description, setDescription] = useState('');
  const [starting_price, setStarting_price] = useState('');
  const [ending_price, setEnding_price] = useState('');
  const [address, setAddress] = useState('');
  const [rating, setRating] = useState('');
  const [capacity, setCapacity] = useState('');
  const [duration, setDuration] = useState('');
  const [tags, setTags] = useState([]);
  const [transport, setTransport] = useState([]);
  const [stay, setStay] = useState([]);
  const [meal, setMeal] = useState([]);
  const [activities, setActivities] = useState([]);
  const [special, setSpecial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [photos, setPhotos] = useState([]);
  const [mobile, setMobile] = useState([]);

  const addPack = { name, description, starting_price, ending_price, mobile, address, rating, capacity, duration, tags, transport, stay, meal, activities, special, photos };

  const history = useHistory();

  const addPic = (pic) => {
    photos.push(pic);
  }

  const handleMoveback = () => {
    history.push('/packages')
  }

  // uploading Images ########################

  const uploadImage = (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    if (!data) {
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
      })
      .then((response) => {
        if (response.data.data) {
          addPic(response.data.data);
          setLoading(`${photos.length} File uploaded`);
        }
        else {
          setLoading("File uploading failed in loading");
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
      history.push("/bookings");
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }

    axios.post(API.ADD_PACKAGE,
      addPack, {
      headers: headers
    })
      .then((resp) => {
        if ('message' in resp.data) {
          alert(resp.data.message);
          history.push('/packages');
        }
        else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        if (err.response.status === 500) {
          alert("Package information is already available.");
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
          <p style={{ marginLeft: "1rem", fontSize: "12px" }}>Ram Singh <br /><span><small>Logout</small></span></p>

        </div>

      </div>

      {/* ################ ROW-2 ################## */}

      <div className="row cpr-rw-2">

        <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
          <h3>Add Package</h3>
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
                  <div className="col-lg-4 col-md-6 col-sm-12 cpr-rw3-col-2">


                    <div className="row cpr-rw3-col-1-sub-row-1 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6 >Package Name</h6>
                        <input className="cpr-inputs" name="name" placeholder="name" type="text" onChange={(e) => { setName(e.target.value) }} required />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-1-sub-row-2 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>Description</h6>
                        <input className="cpr-inputs" name="description" placeholder="description" type="text" onChange={(e) => { setDescription(e.target.value) }} />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-1-sub-row-3 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>Starting Price</h6>
                        <input className="cpr-inputs" name="starting_price" placeholder="starting_price" type="text" onChange={(e) => { setStarting_price(e.target.value) }} />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-1-sub-row-4 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>Ending Price</h6>
                        <input className="cpr-inputs" name="ending_price" placeholder="ending_price" type="text" onChange={(e) => { setEnding_price(e.target.value) }} />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-1-sub-row-5 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>Address</h6>
                        <input className="cpr-inputs" name="address" placeholder="address" type="text" onChange={(e) => { setAddress(e.target.value) }} />
                      </div>

                    </div>

                    <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                      <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                        <h6>Rating</h6>
                        <input className="cpr-inputs" name="rating" placeholder="rating" type="text" onChange={(e) => { setRating(e.target.value) }} />

                      </div>

                    </div>



                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12 cpr-rw3-col-2">

                    <div className="row cpr-rw3-col-2-sub-row-1 cpr-rw3-col-2-sub-rows-all">
                      <div className="col">
                        <h6>Mobile</h6>
                        <input className="cpr-inputs" name="mobile" placeholder="special" type="text" onChange={(e) => { setMobile(e.target.value) }} />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-2-sub-row-1 cpr-rw3-col-2-sub-rows-all">
                      <div className="col">
                        <h6>Specials</h6>
                        <input className="cpr-inputs" name="special" placeholder="special" type="text" onChange={(e) => { setSpecial(e.target.value) }} />
                      </div>
                    </div>

                    <div className="row cpr-rw3-col-2-sub-row-2 cpr-rw3-col-2-sub-rows-all">
                      <div className="col">
                        <h6>Photos</h6> 
                        <input className="cpr-inputs" name="img" placeholder="photos" type="file" onChange={uploadImage} />
                        <p>you can upload multiple photos</p>
                        <p>{loading}</p>

                      </div>
                    </div>

                    <div className="row cpr-rw3-col-2-sub-row-3 cpr-rw3-col-2-sub-rows-all">
                      <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                        <h6>Capacity</h6>
                        <input className="cpr-inputs" name="capacity" placeholder="capacity" type="text" onChange={(e) => { setCapacity(e.target.value) }} />
                      </div>
                    </div>

                    <div className="row  cpr-rw3-col-2-sub-row-4 cpr-rw3-col-2-sub-rows-all">
                      <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                        <h6>Duration</h6>
                        <input className="cpr-inputs" name="duration" placeholder="duration" type="text" onChange={(e) => { setDuration(e.target.value) }} />
                      </div>
                    </div>

                    <div className="row  cpr-rw3-col-2-sub-row-7 cpr-rw3-col-2-sub-rows-all">
                      <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                        <h6>Tags</h6>
                        <input className="cpr-inputs" name="tags" placeholder="tags comma separated" type="text" onChange={(e) => { if (e.target.value) setTags(e.target.value.toString().split(",")) }} />
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12 cpr-rw3-col-2">
                    <div className="row  cpr-rw3-col-2-sub-row-7 cpr-rw3-col-2-sub-rows-all">
                      <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                        <h6>Transport</h6>
                        <input className="cpr-inputs" name="transport" placeholder="transport comma separated" type="text" onChange={(e) => { if (e.target.value) setTransport(e.target.value.toString().split(",")) }} />
                      </div>

                    </div>

                    <div className="row  cpr-rw3-col-2-sub-row-7 cpr-rw3-col-2-sub-rows-all">
                      <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                        <h6>Stay</h6>
                        <input className="cpr-inputs" name="stay" placeholder="stay choices comman separated" type="text" onChange={(e) => { if (e.target.value) setStay(e.target.value.toString().split(",")) }} />
                      </div>

                    </div>

                    <div className="row  cpr-rw3-col-2-sub-row-7 cpr-rw3-col-2-sub-rows-all">
                      <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                        <h6>Meal</h6>
                        <input className="cpr-inputs" name="meal" placeholder="meal options comma separated" type="text" onChange={(e) => { if (e.target.value) setMeal(e.target.value.toString().split(",")) }} />

                      </div>

                    </div>

                    <div className="row  cpr-rw3-col-2-sub-row-7 cpr-rw3-col-2-sub-rows-all">
                      <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                        <h6>Activities</h6>
                        <input className="cpr-inputs" name="activities" placeholder="activities choices comma separated" type="text" onChange={(e) => { if (e.target.value) setActivities(e.target.value.toString().split(",")) }} />
                      </div>

                    </div>

                    <div className="row  cpr-rw3-col-2-sub-row-7 cpr-rw3-col-2-sub-rows-all">
                      <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                        <button className="cpr-approve-btn">Approve</button>
                      </div>

                    </div>

                    <div className="row  cpr-rw3-col-2-sub-row-7 cpr-rw3-col-2-sub-rows-all">
                      <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                        <button onClick={() => history.push('/packages')} type="cancel" className="cpr-cancel-btn">Cancel</button>
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
