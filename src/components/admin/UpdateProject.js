import axios from 'axios';
import React, { useState, useEffect } from 'react';


const UpdateProject = () => {


    const [project, setProject] = useState({

        projectID: 0,
        projectName: '',
        bugId:0,
        startDateOfProject: '',
        endDateOfProject: '',
        staffId: 0,
        projectPriority: 0

    });

    const handleProjectData = (evt) => {


        console.log("handleProjectData", evt.target.name, evt.target.value);
        setProject({
            ...project,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const updateProjectDetails = (evt) => {
        axios.put(`http://localhost:8082/Project/updateProject/${project.projectID}`)
            .then((response) => {
                console.log(response);
                setProject(response.data);
                alert(`Leave Status updated successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Update Project Details</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Update Project Details</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={updateProjectDetails} >
                    <div>
                    <p>project ID</p>
                        <input
                            type="number"
                            id="projectID"
                            name="projectID"
                            className="form-control mb-3"
                            placeholder="Project ID"
                            onChange={handleProjectData}
                        />
                        <p>project Name</p>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            className="form-control mb-3"
                            placeholder="Project Name"
                            onChange={handleProjectData}
                        />
                        <p>bug Id</p>
                        <input
                            type="number"
                            id="bugId"
                            name="bugId"
                            className="form-control mb-3"
                            placeholder="Bug Id"
                            onChange={handleProjectData}
                        />
                        <p>start Date of Project</p>
                        <input
                            type="date"
                            id="startDateOfProject"
                            name="startDateOfProject"
                            className="form-control mb-3"
                            placeholder="Start Date Of Project"
                            onChange={handleProjectData}
                        />
                        <p>End Date Of Project</p>
                        <input
                            type="date"
                            id="endDateOfProjectt"
                            name="endDateOfProjectt"
                            className="form-control mb-3"
                            placeholder="End Date Of Projectt"
                            onChange={handleProjectData}
                        />
                        <p>Staff ID</p>
                        <input
                            type="number"
                            id="staffId"
                            name="staffId"
                            className="form-control mb-3"
                            placeholder="Staff Id"
                            onChange={handleProjectData}
                        />
                        <p>Project Priority</p>
                        <input
                            type="number"
                            id="projectPriority"
                            name="projectPriorityy"
                            className="form-control mb-3"
                            placeholder="Project Priority"
                            onChange={handleProjectData}
                        />

                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Update Project Details"
                        />
                    </div>
                </form>
               
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}

export default UpdateProject;