import React from 'react';
import Routes from '../Routes';

import AdminDashboard from './admin/AdminDashboard';

import Footer from './Footer';
import Header from './Header';

const AboutUs = () => {

    return (
        <div>
            <div className="d-flex pb-4">
                <AdminDashboard />
                {/* <AppSideBar/> */}
                <div>
                    {/* <Header />
                    <Routes /> */}
                    {/* <router-outlet></router-outlet> */}
                </div>
            </div>
            <Footer />
            {/* <div className="about-style">

                <h1>hello</h1>
                <PageLayout />
            </div> */}
        </div>
    )
}

export default AboutUs;