import React from 'react';
import AdminDashboard from './AdminDashboard';


const Project = () => {

    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">

                    <div className="col-sm-2"></div>
                    <div className="ref">
                        <h3 style={{color:"blue",marginTop:"20px",marginLeft:"100px"}}>Project</h3>
                        <div className="row">
                            <button className="button1">Add Project</button>
                            <button className="button2">Update Project</button>
                            <button className="button3">Delete Project by ID</button>
                            <button className="button4">Get all Project</button>
                            <button className="button5">Search Project by ID</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
export default Project;