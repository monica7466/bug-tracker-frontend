import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                    <Header/>
                    <div>
                    <Switch>
                           <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/register"> <Register /> </Route>
                    </Switch>
                    </div>
                </div>
            </Router>
            <Footer/>
        </div>
    )
}
 
export default Routes;