import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AdminDashboard from './admin/AdminDashboard';
 
const CustomHeader = () => {
    
    return (
        <div>
            <header className="header sticky-top">
                <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-primary bg-primary">
                <h4 className="navbar navbar-light">Welcome</h4>
                    <div className="container">
                        
                        <Link className="navbar-brand" to="/home">
                            <img src="https://www.pikpng.com/pngl/b/140-1404779_tracking-and-fixing-bugs-is-no-more-a.png"
                                height="50px" alt="Bug" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navbar-dark" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Logout</Link>
                                </li>
 
                            </ul>
                        </div>
                    </div>
                </nav>
                <AdminDashboard />
            </header>
        </div>
    );
 
}
export default CustomHeader;