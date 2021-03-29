import React from 'react';
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
import EditPackage from './Components/AdminSide/Packages/EditPackage/EditPackage';
import Login from './Components/CustomerSide/Login/LoginModal/Login';



const App = ( {selected} ) => {



  return (
    <div className="app">
      <Router>
        <Switch>
        <Route exact path='/blog'>
        <NavBeforeLog/>
            <BlogPage/>
            <Footer/>
          </Route>
          <Route exact path='/editpackage' >
            <EditPackage/>
          </Route>
          <Route exact path='/packagesmanager'>
            <PackagesManager/>
          </Route>
          <Route exact path='/packagerequest'>
            <CustomPackageRequest/>
          </Route>
          <Route exact path='/custompackages'>
            <CustomPackages/>
          </Route>
          <Route exact path='/bookings'>
            <Bookings/>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard/>
          </Route>
          <Route path='/'>
           <Navbar/>
            <HomeAfterLogin/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App
