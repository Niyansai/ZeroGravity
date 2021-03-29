import React, { Fragment } from 'react'
import './styles.css';
import Footer from './Components/Footer/Footer';
import Navbar from "./Components/Navbar/Navbar";
import GravityImg from "./Assets/GravityImg.png";


const GravityPage = () => {
    
    return (
        <div>
          
<Fragment>
    <div className="App">
    <Navbar/>
    <div className="line-divider"> 
    </div>
    <div className="container-fluid ">
      <div className="row gravity-cntnr">
        <div className="col-lg-5 col-md-6 col-sm-12">
<img className="gravty-img img-fluid" src={GravityImg} alt=""/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
<h4>Lorem ipsum dolor sit amet, accusantium stiae laudantium harum fugit?</h4>
<div className="txtflex-disc">
  <p>By Shelly Turner</p>
  <p>Monday 6 June 2019</p>
</div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus praesentium fugiat sequi asperiores iste laborum consectetur libero ut, corrupti illo architecto omnis nulla cupiditate? Ex suscipit tenetur fugit nobis voluptates!
  Ut quibusdam error sequi earum  Quae, commodi a! Iure.</p>

<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cumque quas mollitia sapiente laboriosam eius fugiat modi, possimus atque sed molestiae iure. Maxime modi at culpa unde repudiandae rem sed!
Quisquam esse perferendis,cere perspiciatis provident deserunt, quae laudantium non a similique neque dolore deleniti saepe quo cum ad! Doloribus maxime aut ea incidunt!</p>
</div>
<div className="col-lg-1 col-md-2">
</div>
      </div>
      <div className="row gravity-cntnr grvty-rw2">
        <div className="col-lg-6 col-md-6 col-sm-12">
<h4>Lorem ipsum dolor sit amet, accusantium stiae laudantium harum fugit?</h4>
<div className="txtflex-disc">
  <p>By Shelly Turner</p>
  <p>Monday 6 June 2019</p>
</div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus praesentium fugiat sequi asperiores iste laborum consectetur libero ut, corrupti illo architecto omnis nulla cupiditate? Ex suscipit tenetur fugit nobis voluptates!
Ut quibusdam magnam dolorem dolore ipsum id ducimus ut ab quasi et accusantium veritatis repudiandae labore non itaque. Quae, commodi a! Iure.</p>

<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cumque quas mollitia sapiente laboriosam eius fugiat modi, possimus atque sed molestiae iure. Maxime modi at culpa unde repudiandae rem sed!
Quisquam esse saepe quo cum ad! Doloribus maxime aut ea incidunt!</p>
</div>
<div className="col-lg-5 col-md-6 col-sm-12">
<img className="gravty-img img-fluid" src={GravityImg} alt=""/>
        </div>
<div className="col-lg-1 col-md-2">
</div>
      </div>

      <div className="line-divider"> 
    </div>
    </div>
    <Footer/>
    </div>
    </Fragment>  
        </div>
    )
}

export default GravityPage
