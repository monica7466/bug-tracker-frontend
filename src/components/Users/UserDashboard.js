import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const UsersDashboard = () => {
 
    // return (
        // <div className="sidebar">
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
         {/* <h6 className="display-5 text-dark">Dashboard</h6>
                <div>
                    <Link className="nav-link display-5 text-light" to="/bug">Bug</Link>
                </div>
                <div>
                <Link className="nav-link display-5 text-light" to="/messages">Messages</Link>
                </div>
                <div>
                <Link className="nav-link display-5 text-light" to="/projectReport">Project Reports</Link>
                </div>
        </div>
    ) */}
    const history = useHistory();
 
    const bugs = (event) => {
 
        history.push('/bug');
 
        event.preventDefault();
    }
    const messages = (event) => {
 
        history.push('/messages');
 
        event.preventDefault();
    }
    const reports = (event) => {
 
        history.push('/projectReport');
 
        event.preventDefault();
    }
    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row" className="alignment" >
                    <div className="col-sm-2"></div>
                    <div className="ref">
                        <h3 style={{ color: "blue", marginTop: "30px", marginRight: "500px" }}>User Dashboard</h3>
                        <div class="card-columns">
                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <img src="https://bit.ly/3oLC3j4" class="card-img-top" alt="..." />
                                    <h5 class="card-title text-dark">BUGS OPERATIONS</h5>
                                    <p class="card-text text-dark">Perform bug opartions by using below button.</p>
                                    <button type="button" class="btn btn-primary" onClick={bugs}>BUG</button>
                                </div>
                            </div>

                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <img src="https://bit.ly/3FCVb8Y" class="card-img-top" alt="..." />
                                    <h5 class="card-title text-dark">MESSAGE OPERATIONS</h5>
                                    <p class="card-text text-dark">Perform project opartions by using below button.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    <button type="button" class="btn btn-primary" onClick={messages}>MESSAGE</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <img src="https://bit.ly/3FCVb8Y" class="card-img-top" alt="..." />
                                    <h5 class="card-title text-dark">REPORT OPERATIONS</h5>
                                    <p class="card-text text-dark">Perform report opartions by using below button.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    <button type="button" class="btn btn-primary" onClick={reports}>REPORT</button>
                                </div>
                            </div>


                        </div>
                        <p><br /><br /></p>
                    </div>


                </div>

            </div>

        </div>
    )
  

}
export default UsersDashboard;
