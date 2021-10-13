import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const AdminDashboard = () => {

    const history = useHistory();

    const bugs = (event) => {


        history.push('/bugs');

        event.preventDefault();
    }
    const messages = (event) => {


        history.push('/message');

        event.preventDefault();
    }
    const project = (event) => {


        history.push('/project');

        event.preventDefault();
    }
    const report = (event) => {


        history.push('/report');

        event.preventDefault();
    }
    const staff = (event) => {


        history.push('/staff');

        event.preventDefault();
    }
    return (
        <div>
            <div>
                <div className="row" className="alignment1" >
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color: "blue", marginTop: "30px", marginRight: "50px"}}>Admin Dashboard</h3>
                    <div class="card-columns">
                     <div class="card" style={{ width: "22rem" }}>
                    <div class="card-body">
                        <img src="https://bit.ly/3oLC3j4" class="card-img-top" alt="..." />
                        <h5 class="card-title text-dark">BUGS OPERATIONS</h5>
                        <p class="card-text text-dark">Perform bug opartions by using below button.</p>
                        <button type="button" class="btn btn-primary" onClick={bugs}>BUGS</button>
                    </div>
                </div>
                <div class="card" style={{ width: "22rem" }}>
                    <div class="card-body">
                    <img src="https://bit.ly/3FCVb8Y" class="card-img-top" alt="..." />
                        <h5 class="card-title text-dark">STAFF OPERATIONS</h5>
                        <p class="card-text text-dark">Perform staff opartions by using below button.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={staff}>STAFF</button>
                    </div>
                </div>
                <div class="card" style={{ width: "22rem" }}>
                    <div class="card-body">
                    <img src="https://bit.ly/3FCVb8Y" class="card-img-top" alt="..." />
                        <h5 class="card-title text-dark">PROJECT OPERATIONS</h5>
                        <p class="card-text text-dark">Perform project opartions by using below button.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={project}>PROJECT</button>
                    </div>
                </div>
                <div class="card" style={{ width: "22rem" }}>
                    <div class="card-body">
                    <img src="https://bit.ly/3FCVb8Y" class="card-img-top" alt="..." />
                        <h5 class="card-title text-dark">REPORT OPERATIONS</h5>
                        <p class="card-text text-dark">Perform report opartions by using below button.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={report}>REPORT</button>
                    </div>
                </div>
                <div class="card" style={{ width: "22rem" }}>
                    <div class="card-body">
                    <img src="https://bit.ly/3FCVb8Y" class="card-img-top" alt="..." />
                        <h5 class="card-title text-dark">MESSAGE OPERATIONS</h5>
                        <p class="card-text text-dark">Perform message opartions by using below button.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={messages}>MESSAGE</button>
                    </div>
                </div>
                
            </div>
            <p><br/><br/></p>
                    </div>


                </div>

            </div>

        </div>
    )

}
export default AdminDashboard;

