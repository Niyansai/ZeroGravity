import React, { Fragment } from 'react';
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
import VIewBookings from './Components/AdminSide/Bookings/ViewBooking/VIewBooking';
import EditBooking from './Components/AdminSide/Bookings/EditBooking/EditBooking';
import AddBooking from './Components/AdminSide/Bookings/AddBooking/AddBooking';
import EditPackages from './Components/AdminSide/Packages/EditPackages/EditPackages';




const App = ({ selected }) => {





  const Booking = ({ match }) => {

    return (
      <Fragment>
        <Switch>
          <Route path={match.url} exact={true} component={Bookings} />
          <Route path={`${match.url}/add`} exact={true} component={AddBooking} />
          <Route path={`${match.url}/view`} exact={true} component={VIewBookings} />
          <Route path={`${match.url}/edit`} exact={true} component={EditBooking} />
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



  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/blog'>
            <NavBeforeLog />
            <BlogPage />
            <Footer />
          </Route>
          <Route path="/packages" component={Packages} />
          <Route path="/bookings" component={Booking} />
          <Route path="/customerdatabase" component={Users} />

          <Route exact path='/packagerequest'>
            <CustomPackageRequest />
          </Route>
          <Route exact path='/custompackages'>
            <CustomPackages />
          </Route>

          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path={["/home", "/"]}  >
            <Navbar />
            <HomeAfterLogin />
            <Footer />
          </Route>

        </Switch>
      </Router>

    </div>
  )
}

export default App
