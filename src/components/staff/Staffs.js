import React from 'react';
import { useHistory } from 'react-router';


const Staffs = () => {
    const history = useHistory();
    const submitViewStaff = (event) => {


        history.push('/getAllStaff');

        event.preventDefault();
    }
    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row" className="alignment">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color: "blue", marginTop: "30px", marginRight: "500px"}}>Staffs</h3>
                        <div class="card-columns">
                <div class="card" style={{ width: "22rem" }}>
                    <img src="https://bit.ly/3ByVcrR" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">View All Staff</h5>
                        <p class="card-text text-dark">Perform view all staff by using below button.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={submitViewStaff}>View All</button>
                    </div>
                </div>
                </div>
                    </div>
               </div>
            </div>
        </div>
    )
}
export default Staffs;