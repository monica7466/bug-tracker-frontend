import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import AddBug from './components/AddBug';
import AdminDashboard from './components/admin/AdminDashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
 
const Routes = () => {
    return(
        <div>
            <Router>
                <div>
                   
                    <div>
                    <Switch>
                           <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/register"> <Register /> </Route>
                            <Route path="/about"><AboutUs/></Route>
                            <Route path="/addBug"><AddBug/></Route>
                            <Route path="/adminDashboard"><AdminDashboard/></Route>
                    </Switch>
                    </div>
                </div>
                
            </Router>
              
        </div>
    )
}
 
export default Routes;