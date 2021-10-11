import React from 'react';
// import StaffDashboard from './StaffDashboard';


const Projects = () => {

    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color:"blue",marginTop:"20px",marginLeft:"100px"}}>Project</h3>
                        <div className="row">
                        <button className="button1">View assigned project by staff ID</button>
                        <button className="button2">Assign project to other staff</button>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}
export default Projects;