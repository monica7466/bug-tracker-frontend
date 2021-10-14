import React from 'react';
// import StaffDashboard from './StaffDashboard';
import { useHistory } from 'react-router';

const Projects = () => {
    
    const history = useHistory();
    const searchProjectByStaffId = (event) => {


        history.push('/viewAssignedProject');

        event.preventDefault();
    }
    const submitUpdateProject = (event) => {


        history.push('/assignProjectToOtherStaff');

        event.preventDefault();
    }
    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row" className="alignment">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color: "blue", marginTop: "30px", marginRight: "500px"}}>Projects</h3>
                    <div class="card-columns">
                <div class="card" style={{ width: "22rem" }}>
                    <img src="https://bit.ly/3FzHXd4" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">View Assign Project</h5>
                        <p class="card-text text-dark">Perform view assigned project by using below button.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={searchProjectByStaffId}>View</button>
                    </div>
                </div>
                <div class="card-columns">
                <div class="card" style={{ width: "22rem" }}>
                    <img src="https://bit.ly/3FBR6Sb" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Assign Project to other staff</h5>
                        <p class="card-text text-dark">Perform assign project to another staff by using below button.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={submitUpdateProject}>Assign</button>
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
export default Projects;