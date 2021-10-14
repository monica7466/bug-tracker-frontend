import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const UsersDashboard = () => {

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
                <div className="row" className="alignment1" >
                    <div className="col-sm-2"></div>
                    <div className="ref">
                        <h3 style={{ color: "blue", marginTop: "30px", marginRight: "50px" }}>User Dashboard</h3>
                        <div class="card-columns">
                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <img src="https://bit.ly/3DAUbAn" class="card-img-top" alt="..." />
                                    <h5 class="card-title text-dark">BUGS OPERATIONS</h5>
                                    <p class="card-text text-dark">Perform bug opartions by using below button.</p>
                                    <button type="button" class="btn btn-primary" onClick={bugs}>BUG</button>
                                </div>
                            </div>

                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <img src="https://bit.ly/2YR4LnS" class="card-img-top" alt="..." />
                                    <h5 class="card-title text-dark">MESSAGE OPERATIONS</h5>
                                    <p class="card-text text-dark">Perform project opartions by using below button.</p>
                                    <button type="button" class="btn btn-primary" onClick={messages}>MESSAGE</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <img src="https://bit.ly/3lEfTNO" class="card-img-top" alt="..." />
                                    <h5 class="card-title text-dark">REPORT OPERATIONS</h5>
                                    <p class="card-text text-dark">Perform report opartions by using below button.</p>
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
