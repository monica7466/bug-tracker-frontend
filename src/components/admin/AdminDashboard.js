import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

return (
    
    <div className="adminDash">
        <h6 className="display-5 text-primary">Dashboard</h6>
        <Link className="nav-link" to="/home">Bugs</Link>
        <Link className="nav-link" to="/home">Staff</Link>
        <Link className="nav-link" to="/home">Project</Link>
        <Link className="nav-link" to="/home">Report</Link>
        <Link className="nav-link" to="/home">Message</Link>
    </div>
)
}
export default AdminDashboard;