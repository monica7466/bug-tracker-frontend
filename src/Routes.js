import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
// import AddBug from './components/AddBug';
import AdminDashboard from './components/admin/AdminDashboard';
import Bug from './components/Users/Bug';
import Bugs from './components/admin/Bugs';
import Messages from './components/Users/Messages';
import Message from './components/admin/Message';
import Project from './components/admin/Project';
import ProjectReport from './components/Users/ProjectReport';
import Report from './components/admin/Report';
import Staff from './components/admin/Staff';
import Staffs from './components/staff/Staffs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Projects from './components/staff/Projects';
import Reports from './components/staff/Reports';
import CustomHeader from './components/CustomHeader';
import StaffDashboard from './components/staff/StaffDashboard';
import UserDashboard from './components/Users/UserDashboard';
 
const Routes = () => {
    return(
        <div>
            <Router>
                <div>
                   <Header/>
                    <div>
                    <Switch>
                           <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/register"> <Register /> </Route>
                            <Route path="/about"><AboutUs/></Route>
                            {/* <Route path="/addBug"><AddBug/></Route> */}
                            <Route path="/bug"><Bug/></Route>
                            <Route path="/messages"><Messages/></Route>
                            <Route path="/projectReport"><ProjectReport/></Route>
                            <Route path="/userDashboard"><UserDashboard/></Route>
                    </Switch>
                    </div>
                </div>
                
            </Router>
              
        </div>
    )
}
 
export default Routes;