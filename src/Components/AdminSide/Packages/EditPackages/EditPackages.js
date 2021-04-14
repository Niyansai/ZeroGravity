import React, { useEffect, useState } from 'react';
import "./styles.css";
import GravityLogo from "../../../../Assets/GravityLogo.png"
import { Avatar } from '@material-ui/core';
import RealProfilePic from "../../../../Assets/ProfileReal.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, useParams } from 'react-router-dom';
import API from '../../../../Utils/Utils';
import axios from 'axios';






const EditPackages = () => {

  const { id } = useParams();
  
  const history = useHistory();


    const [loading, setLoading] = useState(false);

  
    const [userPackages, setUserPackages] = useState({
      _id: "",
      name: "",
      description: "",
      starting_price: "",
      ending_price: "",
      address:"",
      rating:"",    
      capacity:"", 
      duration:"", 
      tags:"",
      transport:"",
      stay:"",
      meal:"",
      activities:"",
      special:""
    });

    const { name, description, starting_price, ending_price, address, rating, capacity, duration, tags, transport, stay, meal, activities, special } = userPackages;

    const onInputChange = e => {
      setUserPackages({ ...userPackages, [e.target.name]: e.target.value });
    };


    
    useEffect(() => {
      loadUserPackage();
      
    }, [])



    // ################### POST UPDATED FORM SUBMIT #####################

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

        userPackages.id = id;
    
        axios.post(API.UPDATE_PACKAGE,
            userPackages, {     
          headers: headers
            }
        )
          .then((resp) => setUserPackages(resp.data.data))
          .then(history.push('/packages'))
          .catch((err) => {
            if (err.response.status === 500) {
              alert("Package information is already available.");
            }
            if (err.response.status === 401) {
              history.push("/home");
            }
          });
    
      }


    //   ######################### GET DATA FOR AUTOMATIC UPLOAD OF DATA #############################



    const loadUserPackage = async () => {
      const token = sessionStorage.getItem("token");
      if (token == null) {
        history.push("/");
        return;
      }
  
      // token exists 
    const result =  await axios.get(API.SEARCH_PACKAGE_BY_ID, {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        params: {
          "id": id        
        }

      });
      
      setUserPackages(result.data.data)
    }

// ############################# OnClick Handlers ###############################

    const handleMoveback = () => {
        history.push('/packages')
    }

  
    return (

        <div className="container cpr-cntnr">


            {/* ################ ROW-1 ################## */}

           <div className="row cpr-rw-1">

                <div className="col-lg-10 col-md-6 col-sm-12 cpr-rw1-col-1">

                        <img className="img-fluid cpr-rw1-col-1-logo" src={GravityLogo} alt=""/>
                                           
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 cpr-rw1-col-2">
                <Avatar src={RealProfilePic}/>
                <p style={{marginLeft: "1rem", fontSize: "12px"}}>Ram Singh <br/><span><small>Logout</small></span></p>

                </div>

               </div> 

                {/* ################ ROW-2 ################## */}
                
           <div className="row cpr-rw-2">

                <div className="col-lg-10 col-md-6 col-sm-6 cpr-rw-2-col-1">
                <h3>Edit Package</h3>
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
                                    <div className="col-lg-4 col-md-6 col-sm-12 cpr-rw3-col-1">


                        <div className="row cpr-rw3-col-1-sub-row-1 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6 >Package Name</h6>
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
                            <h6>Description</h6>
                            <input className="cpr-inputs" 
                            name="description" 
                            value={description} 
                            placeholder="description" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-3 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>starting_price</h6>
                            <input className="cpr-inputs" 
                            name="starting_price" 
                            value={starting_price} 
                            placeholder="starting_price" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-4 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>ending_price</h6>
                            <input className="cpr-inputs" 
                            name="ending_price" 
                            value={ending_price} 
                            placeholder="ending_price" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                            </div>
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-5 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>address</h6>
                            <input className="cpr-inputs" 
                            name="address" 
                            value={address} 
                            placeholder="address" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                            </div>
                           
                        </div>

                        <div className="row cpr-rw3-col-1-sub-row-6 cpr-rw3-col-1-sub-rows-all">
                            <div className="col cpr-rw3-col-1-sub-row-1-col-only">
                            <h6>rating</h6>
                            <input className="cpr-inputs" 
                            name="rating" 
                            value={rating} 
                            placeholder="rating" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                           
                            </div>
                            
                        </div>

                            

                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 cpr-rw3-col-2">

                            <div className="row cpr-rw3-col-2-sub-row-1 cpr-rw3-col-2-sub-rows-all">
                                <div className="col">
                                    <h6>special</h6>
                            <input className="cpr-inputs" 
                            name="special" 
                            value={special} 
                            placeholder="special" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                                </div>
                            </div>

                            <div className="row cpr-rw3-col-2-sub-row-2 cpr-rw3-col-2-sub-rows-all">
                                <div className="col">
                                <h6>photos</h6>
                                <input className="cpr-inputs" 
                                name="img" 
                                placeholder="photos" 
                                type="file" 
                                 />
                               <p>{loading}</p>                          
                                </div>
                            </div>



                            <div className="row cpr-rw3-col-2-sub-row-3 cpr-rw3-col-2-sub-rows-all">
                            <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                            <h6>capacity</h6>
                            <input className="cpr-inputs" 
                            name="capacity" 
                            value={capacity} 
                            placeholder="capacity" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                            </div>
                        </div>

                        <div className="row  cpr-rw3-col-2-sub-row-4 cpr-rw3-col-2-sub-rows-all">
                            <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                            <h6>duration</h6>
                            <input className="cpr-inputs" 
                            name="duration" 
                            value={duration} 
                            placeholder="duration" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                            </div>
                        </div>

                        <div className="row  cpr-rw3-col-2-sub-row-7 cpr-rw3-col-2-sub-rows-all">
                            <div className="col cpr-rw3-col-2-sub-row-1-col-only">
                            <h6>Tags</h6>
                            <input className="cpr-inputs" 
                            name="tags" 
                            value={tags} 
                            placeholder="tags" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                            </div>
                        </div>

                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 cpr-rw3-col-3">
                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <h6>transport</h6>
                            <input className="cpr-inputs" 
                            name="transport" 
                            value={transport} 
                            placeholder="transport" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <h6>stay</h6>
                            <input className="cpr-inputs" 
                            name="stay" 
                            value={stay} 
                            placeholder="stay" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <h6>meal</h6>
                            <input className="cpr-inputs" 
                            name="meal" 
                            value={meal} 
                            placeholder="meal" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                                
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <h6>activites</h6>
                            <input className="cpr-inputs" 
                            name="activities" 
                            value={activities} 
                            placeholder="activities" 
                            type="text" 
                            onChange={e => onInputChange(e)}
                            />
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
                                <button type="submit" className="cpr-approve-btn">Update Package</button>
                                </div>

                            </div>

                            <div className="row cpr-rw3-col-3-subrow-1 cpr-rw3-col-3-sub-rows-all">
                                <div className="col cpr-rw3-col-3-subrow-1-col-only col-3-sr">
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

export default EditPackages;
