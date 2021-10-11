import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AdminDashboard from './admin/AdminDashboard';

const Header = () => {
    return (
        <div>
            <header className="header sticky-top">
                <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-primary bg-primary">
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
                                    <Link className="nav-link" to="/adminDashboard">Admin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/staffDashboard">Staff</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/userDashboard">User</Link>
                                </li>
                                <li className="nav-item align-end">
                                    {/* align right this item  */}
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <AdminDashboard /> */}
        </div>
    );

}
export default Header;