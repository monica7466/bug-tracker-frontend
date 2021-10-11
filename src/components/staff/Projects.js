import React from 'react';
// import StaffDashboard from './StaffDashboard';


const Staffs = () => {

    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color:"blue",marginTop:"20px",marginLeft:"100px"}}>Project</h3>
                    <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="https://bit.ly/2WYrYUw" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title text-dark">View Assign Project</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" >View</button>
                    </div>
                </div>
                <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="https://bit.ly/2WYrYUw" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title text-dark">Assign Project to other staff</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" >Assign</button>
                    </div>
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