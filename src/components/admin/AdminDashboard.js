import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    return (
        <div className="sidebar">
            {/* <div className="adminDash">
    <button variant="primary">Primary</button> 
    </div> */}
            {/* <div className="sidebar">
                <h6 className="display-5 text-dark">Dashboard</h6> */}
                {/* <Link className="nav-link display-5 text-light" to="/bugs">Bugs</Link>
        <Link className="nav-link display-5 text-light" to="/home">Staff</Link>
        <Link className="nav-link display-5 text-light" to="/home">Project</Link>
        <Link className="nav-link display-5 text-light" to="/home">Report</Link>
        <Link className="nav-link display-5 text-light" to="/home">Message</Link> */}
         <h6 className="display-5 text-dark">Dashboard</h6>
                <div>
                    <Link className="nav-link display-5 text-light" to="/adminDashboard/bugs">Bugs</Link>
                </div>
                <div>
                    <Link className="nav-link display-5 text-light" to="/staff">Staff</Link>
                </div>
                <div>
                <Link className="nav-link display-5 text-light" to="/project">Project</Link>
                </div>
                <div>
                <Link className="nav-link display-5 text-light" to="/report">Report</Link>
                </div>
                <div>
                <Link className="nav-link display-5 text-light" to="/message">Message</Link>
                </div>
        </div>
    )
}
export default AdminDashboard;

