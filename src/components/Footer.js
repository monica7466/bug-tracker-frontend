import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
 
const Footer = () => {
 
    return (
        <footer class="footer sticky-top">
            <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-primary bg-primary">
                <div class="container">
                    <div class="collapse navbar-collapse navbar-dark" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                        <li className="nav-item">
                                <h6 >Facebook </h6>
                            </li>
                            <li className="nav-item align-end">
                                {/* align right this item  */}
                                <h6>Github</h6>
                                </li>
                           
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </footer>
    );
    
}
    export default Footer;