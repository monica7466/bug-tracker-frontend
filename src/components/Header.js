import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
 
const Header = () => {
 
    return (
        <header class="header sticky-top">
            <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-primary bg-primary">
                <div class="container">
                    <Link className="navbar-brand" to="/home">
                        <img src="https://www.pikpng.com/pngl/b/140-1404779_tracking-and-fixing-bugs-is-no-more-a.png"
                            height="50px" alt="Bug" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse navbar-dark" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                        <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        <li className="nav-item">
                                <Link className="nav-link" to="/adminDashboard">Admin</Link>
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
    );
    
}
    export default Header;