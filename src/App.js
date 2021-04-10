import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomeAfterLogin from './Components/CustomerSide/Home/HomeAfterLogin/HomeAfterLogin';
import BlogPage from './Components/AdminSide/Blog/BlogPage/BlogPage';
import NavBeforeLog from './Components/CustomerSide/NavBeforeLog/NavBeforeLog';
import Bookings from './Components/AdminSide/Bookings/Booking/Bookings';
import Dashboard from './Components/AdminSide/Dashboard/Dashboard';
import CustomPackages from './Components/AdminSide/CustomPackages/CustomPackages';
import CustomPackageRequest from './Components/AdminSide/CustomPackages/CustomPackageRequest/CustomPackageRequest';
import PackagesManager from './Components/AdminSide/Packages/PackagesManager/PackagesManager';
import Login from './Components/CustomerSide/Login/LoginModal/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import AddPackage from './Components/AdminSide/Packages/AddPackage/AddPackage';
import ViewPackage from './Components/AdminSide/Packages/ViewPackage/ViewPackage';
import AddUser from './Components/AdminSide/CustomerDataBase/AddUser/AddUser';
import ViewUser from './Components/AdminSide/CustomerDataBase/ViewUser/ViewUser';
import EditUser from './Components/AdminSide/CustomerDataBase/EditUser/EditUser';
import CustomerDatabase from './Components/AdminSide/CustomerDataBase/CustomerDatabase/CustomerDatabase';
import EditBooking from './Components/AdminSide/Bookings/EditBooking/EditBooking';
import AddBooking from './Components/AdminSide/Bookings/AddBooking/AddBooking';
import EditPackages from './Components/AdminSide/Packages/EditPackages/EditPackages';
import AddBlog from './Components/AdminSide/Blog/AddBlog/AddBlog';
import EditBlog from './Components/AdminSide/Blog/EditBlog/EditBlog';
import ViewBlog from './Components/AdminSide/Blog/ViewBlog/ViewBlog';
import Inquiry from './Components/AdminSide/Inquiry/Inquiry/Inquiry';
import AddInquiry from './Components/AdminSide/Inquiry/AddInquiry/AddInquiry';
import EditInquiry from './Components/AdminSide/Inquiry/EditInquiry/EditInquiry';
import ViewInquiry from './Components/AdminSide/Inquiry/ViewInquiry/ViewInquiry';
import Coupon from './Components/AdminSide/Coupon/Coupon/Coupon';
import AddCoupon from './Components/AdminSide/Coupon/AddCoupon/AddCoupon';
import EditCoupon from './Components/AdminSide/Coupon/EditCoupon/EditCoupon';
import ViewCoupon from './Components/AdminSide/Coupon/ViewCoupon/ViewCoupon';
import ViewBooking from './Components/AdminSide/Bookings/ViewBooking/VIewBooking';
import Reports from './Components/AdminSide/Reports/Reports';
import AdminProfile from './Components/AdminSide/AdminProfile/AdminProfile';
import axios from 'axios';
import NavbarCSide from './Components/CustomerSide/NavabarCSide/NavbarCSide';
import API from './Utils/Utils';
import DashboardCustomer from './Components/CustomerSide/DashboardCustomer/DashboardCustomer';
import CustomerProfile from './Components/CustomerSide/CustomerProfile/CustomerProfile';


const App = ({ selected }) => {

  const[isLoggedIn, setIsLoggedIn] = useState(false)

useEffect(() => {
  setIsLoggedIn(true)
})

  const Booking = ({ match }) => {

    return (
      <Fragment>
        <Switch>
          <Route path={match.url} exact={true} component={Bookings} />
          <Route path={`${match.url}/add`} exact={true} component={AddBooking} />
          <Route path={`${match.url}/view/:id`} exact={true} component={ViewBooking} />
          <Route path={`${match.url}/edit/:id`} exact={true} component={EditBooking} />
        </Switch>
      </Fragment>
    );
  };


  const Packages = ({ match, item }) => {

    return (
      <Fragment>
        <Switch>
          <Route path={`${match.url}`} exact={true} component={PackagesManager} />
          <Route path={`${match.url}/add`} exact={true} component={AddPackage} />
          <Route path={`${match.url}/view/:id`} exact={true} component={ViewPackage} />
          <Route path={`${match.url}/edit/:id`} exact={true} component={EditPackages} />
        </Switch>
      </Fragment>
    );
  };

  const Users = ({ match, item }) => {

    return (
      <Fragment>
        <Switch>
          <Route path={`${match.url}`} exact={true} component={CustomerDatabase} />
          <Route path={`${match.url}/add`} exact={true} component={AddUser} />
          <Route path={`${match.url}/view/:id`} exact={true} component={ViewUser} />
          <Route path={`${match.url}/edit/:id`} exact={true} component={EditUser} />
        </Switch>
      </Fragment>
    );
  };

  const Blog = ({ match, item }) => {

    return (
      <Fragment>
        <Switch>
          <Route path={`${match.url}`} exact={true} component={BlogPage} />
          <Route path={`${match.url}/add`} exact={true} component={AddBlog} />
          <Route path={`${match.url}/view/:id`} exact={true} component={ViewBlog} />
          <Route path={`${match.url}/edit/:id`} exact={true} component={EditBlog} />
        </Switch>
      </Fragment>
    );
  };

  const InquiryRoute = ({ match, item }) => {

    return (
      <Fragment>
        <Switch>
          <Route path={`${match.url}`} exact={true} component={Inquiry} />
          <Route path={`${match.url}/add`} exact={true} component={AddInquiry} />
          <Route path={`${match.url}/view/:id`} exact={true} component={ViewInquiry} />
          <Route path={`${match.url}/edit/:id`} exact={true} component={EditInquiry} />
        </Switch>
      </Fragment>
    );
  };

  const CouponRoute = ({ match, item }) => {

    return (
      <Fragment>
        <Switch>
          <Route path={`${match.url}`} exact={true} component={Coupon} />
          <Route path={`${match.url}/add`} exact={true} component={AddCoupon} />
          <Route path={`${match.url}/view/:id`} exact={true} component={ViewCoupon} />
          <Route path={`${match.url}/edit/:id`} exact={true} component={EditCoupon} />
        </Switch>
      </Fragment>
    );
  };


  return (
    <div className="app">
      <Router>


        <Switch>

      {/* ######################### CUSTOMER SIDE ################################### */}


        <Route exact path='/customer'>
            <NavbarCSide/>
            <DashboardCustomer />
          </Route>

          <Route exact path='/customer/editprofile'>
            <CustomerProfile />
          </Route>


            {/* ######################### ADMIN SIDE ################################### */}

          <Route path="/reports" component={Reports} />
          <Route path="/packages" component={Packages} />
          <Route path="/bookings" component={Booking} />
          <Route path="/customerdatabase" component={Users} />
          <Route path="/blog" component={Blog} />
          <Route path="/inquiry" component={InquiryRoute} />
          <Route path="/coupons" component={CouponRoute} />

          <Route exact path='/packagerequest'>
            <CustomPackageRequest />
          </Route>
          <Route exact path='/custompackages'>
            <CustomPackages />
          </Route>

          <Route exact path='/admin'>
            <Dashboard />
          </Route>

          <Route exact path='/admin/editprofile'>
            <AdminProfile />
          </Route>

          <Route path={["/home", "/"]}  >
             <Navbar/>
            <HomeAfterLogin />
            <Footer />
          </Route> 

        </Switch>
      </Router>

    </div>
  )
}

export default App
