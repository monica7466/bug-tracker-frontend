import React from 'react';
import Routes from '../Routes';

import AdminDashboard from './admin/AdminDashboard';

import Footer from './Footer';
import Header from './Header';
import StaffDashboard from './staff/StaffDashboard';

const AboutUs = () => {

    return (
        <div>

        <div className = "container">
           <h1 className="display-4 text-primary text-center">About Us</h1>
                <div className="navbar mdb-navbar1">
                {/* <AdminDashboard /> */}
                {/* <StaffDashboard/> */}
                {/* <AppSideBar/> */}
               
                <p className="font3">The Bug Tracker System is about monitoring and resolving bugs in the software to get details and status of bugs.</p>
          
                <p className="font3">This is the application that keeps the track of reported bugs in software development projects.</p>

                   <p className="font3">Bug Tracker is the globally accessible application.</p>
                </div>
                <div>
            </div>
            </div>
            </div>
           
     
    )
}

export default AboutUs;