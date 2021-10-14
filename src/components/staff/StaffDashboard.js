import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const StaffDashboard = () => {

    const history = useHistory();
 
    const staffs = (event) => {
 
        history.push('/staffs');
 
        event.preventDefault();
    }
    const projects = (event) => {
 
        history.push('/projects');
 
        event.preventDefault();
    }
    const reports = (event) => {
 
        history.push('/reports');
 
        event.preventDefault();
    }
    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row" className="alignment1" >
                    <div className="col-sm-2"></div>
                    <div className="ref">
                        <h3 style={{ color: "blue", marginTop: "30px", marginRight: "50px" }}>Staff Dashboard</h3>
                        <div class="card-columns">
                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <img src="https://bit.ly/3mOwyO1" class="card-img-top" alt="..." />
                                    <h5 class="card-title text-dark">STAFF OPERATIONS</h5>
                                    <p class="card-text text-dark">Perform staff opartions by using below button.</p>
                                    <button type="button" class="btn btn-primary" onClick={staffs}>STAFF</button>
                                </div>
                            </div>

                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <img src="https://bit.ly/30tJKAt" class="card-img-top" alt="..." />
                                    <h5 class="card-title text-dark">PROJECT OPERATIONS</h5>
                                    <p class="card-text text-dark">Perform project opartions by using below button.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    <button type="button" class="btn btn-primary" onClick={projects}>PROJECT</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <img src="https://bit.ly/3lEfTNO" class="card-img-top" alt="..." />
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
export default StaffDashboard;

