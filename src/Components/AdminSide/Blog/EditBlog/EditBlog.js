import React, { useEffect, useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar, Grid, Paper } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, useParams } from 'react-router-dom';
import API from '../../../../Utils/Utils';
import axios from 'axios';


const EditBlog = () => {

  const { id } = useParams();

  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [img, setAvatar] = useState(undefined);
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    photos: []
  });

  const { title, description, photos } = blog;

  const onInputChange = e => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBlog();
  }, []);

  const AdminLogOut = () => {
    const token = sessionStorage.removeItem("token");

    if (token == null) {
      history.push("/home");
      return;
    }
  }

  const addPhoto = async (pic) => {
    photos.push(pic);
  }

  const submitForm = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");
    if (token == null) {
      history.push("/");
      return;
    }

    blog.id = id;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }

    axios.post(API.UPDATE_BLOG,
      blog, {
      headers: headers
    })
      .then((resp) => {
        if ('message' in resp.data) {
          alert(resp.data.message);
          history.push('/blog');
        }
        else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        if (err.response.status === 500) {
          alert("Something went wrong");
        }
        if (err.response.status === 401) {
          history.push("/home");
        }
      });
  }

  const loadBlog = async () => {
    const token = sessionStorage.getItem("token");
    if (token == null) {
      history.push("/");
      return;
    }

    // token exists 
    const result = await axios.get(API.GET_BLOG, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      params: {
        "id": id
      }
    });

    if (result.data.data){
      setBlog(result.data.data[0]);
      if (result.data.data.photos)
        setAvatar(result.data.data.photos[0]);
    }
  }

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
      },
    )
      .then((response) => {
        if (response.data.status == 1) {
          addPhoto(response.data.data);
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

  // ############################# OnClick Handlers ###############################

  const handleMoveback = () => {
    history.push('/blog')
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
          <p style={{ marginLeft: "1rem", fontSize: "12px" }}> {sessionStorage.getItem("user")} <br /><span><small >{AdminLogOut} </small></span></p>

        </div>

      </div>

      {/* ################ ROW-2 ################## */}

      <div className="row cpr-rw-2">

        <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
          <h3 style={{ color: "gray" }}>Edit Blog</h3>
        </div>


        <div className="col-lg-2 col-md-6 col-sm-6 cpr-rw-2-col-2">

          <div onClick={handleMoveback} className="bg-black-bck-arw cpr-back-arrow">
            <ArrowBackIosIcon />
          </div>
          <p><small>Back</small></p>
        </div>
      </div>

      {/* ################ ROW-3 ################## */}
      <Paper className="paper-view-pack">

        <form onSubmit={e => submitForm(e)}>
          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12 view-pack-title">
              <div class="box">
                <input
                  type="file"
                  name="file"
                  id="file"
                  class="inputfile"
                  onChange={uploadImage}
                />
                <p>{loading}</p>
                
                { blog.photos && blog.photos[0] && 
                  <img style={{ width: "250px", paddingTop: "10px", paddingBottom: "10px" }} src={API.GET_IMAGE + "?image=" + blog.photos[0]}></img>
                }
                {
                  img && 
                  <img style={{ width: "250px", paddingTop: "10px", paddingBottom: "10px" }} src={API.GET_IMAGE + "?image=" + img}></img>
                }
              
              </div>
            </div>


            <div className="col-lg-6 col-md-6 col-md-12">

              <div className="row cpr-rw3-col-1-sub-row-3 cpr-rw3-col-1-sub-rows-all">
                <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                  <h6>Title</h6>
                  <input className="form-control"
                    name="title"
                    value={title}
                    placeholder="title for the blog"
                    type="text"
                    onChange={e => onInputChange(e)} required
                  />
                </div>
              </div>

              <div className="row cpr-rw3-col-1-sub-row-4 cpr-rw3-col-1-sub-rows-all">
                <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                  <h6>Description</h6>
                  <textarea className="form-control"
                    name="description"
                    rows="5"
                    value={description}
                    placeholder="description for the blog"
                    type="text"
                    onChange={e => onInputChange(e)} required
                  />
                </div>
              </div>


              <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                  <button type="submit" className="cpr-approve-btn">Update Blog</button>
                </div>

              </div>

              <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                  <button onClick={() => history.push('/blog')} type="cancel" className="cpr-cancel-btn">Cancel</button>
                </div>
              </div>

            </div>
          </div>

        </form>


      </Paper>

    </div >
  )
}

export default EditBlog;
