import React from 'react';
import AddBug from './AddBug';
 
const Home = () => {
 
    return (
        <div className = "container">
            <h1 className="display-4 text-primary text-center">Bug Tracker</h1>
            <div className="navbar mdb-navbar">     
            <AddBug/>
            
            </div>
        </div>
    )
}
 
export default Home;