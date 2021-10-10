import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


const AdminDashboard = () => {

return (
<div>

    <div className="sidebar">
        <h6 className="display-5 text-dark">Dashboard</h6>
        <Link className="nav-link display-5 text-light" to="/home">Bugs</Link>
        <Link className="nav-link display-5 text-light" to="/home">Staff</Link>
        <Link className="nav-link display-5 text-light" to="/home">Project</Link>
        <Link className="nav-link display-5 text-light" to="/home">Report</Link>
        <Link className="nav-link display-5 text-light" to="/home">Message</Link>

    </div>

    </div>
)
}
export default AdminDashboard;

