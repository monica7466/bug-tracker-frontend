import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import AddBug from './components/AddBug';
import AdminDashboard from './components/admin/AdminDashboard';
import Bugs from './components/admin/Bugs';
import Message from './components/admin/Message';
import Project from './components/admin/Project';
import Report from './components/admin/Report';
import Staff from './components/admin/Staff';
import Staffs from './components/staff/Staffs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import StaffDashboard from './components/staff/StaffDashboard';
 
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
                            <Route path="/addBug"><AddBug/></Route>
                            <Route path="/bugs"><Bugs/></Route>
                            <Route path="/staff"><Staff/></Route>
                            <Route path="/project"><Project/></Route>
                            <Route path="/report"><Report/></Route>
                            <Route path="/message"><Message/></Route>
                            <Route path="/staffs"><Staffs /></Route>
                            <Route path="/adminDashboard"><AdminDashboard/></Route>
                            <Route path="/staffDashboard"><StaffDashboard/></Route>
                    </Switch>
                    </div>
                </div>
                
            </Router>
              
        </div>
    )
}
 
export default Routes;