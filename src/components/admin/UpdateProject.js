import axios from 'axios';
import React from 'react';
import { useState } from 'react';
/**
* When admin update the project then updated project will be displayed on console window.
* Admin can also update the project with the help of URL and object to backend.
* If projectId  from the database matches, admin will able to see the alert message in a pop-up window as 'Project updated successfully!'
* If projectId  from the database does not matches, admin will able to see the alert message in a pop-up window as "Project ID does not exist!"

 


* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the project, relative to the url argument
* @return      
* @see         alert project
*/
const UpdateProject = () => {

    // Taking current data from  browser
    const [project, setProject] = useState({
        projectID: 0,
        projectName: '',
        bugId: 0,
        startDateOfProject: '',
        endDateOfProject: '',
        staffId: 0,
        projectPriority: 0
    });
    // Taking current data from  browser
    const [setOneProject] = useState({
        projectID: 0,
        projectName: '',
        bugId: 0,
        startDateOfProject: '',
        endDateOfProject: '',
        staffId: 0,
        projectPriority: 0
    });
    //Data fields for input from browser
    const handleProjectData = (evt) => {
        console.log("handleProjectData", evt.target.name, evt.target.value);
        setProject({
            ...project,
            [evt.target.name]: evt.target.value
        });
        evt.preventDefault();
    }
    //Data fields for input from browser
    const submitAddProject = (evt) => {
        console.log("submitProjectData");
        axios.post('http://localhost:8082/Project/addProject', project)
            .then((response) => {
                setProject(response.data);
                alert('Project updated successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter correct details!')
            });
        evt.preventDefault();
    }



    return (
        <div className="container" >
            <div>
                <p>Update a Project</p>
                <form className="form form-group row" onSubmit={submitAddProject} >
                    <div>
                        <p>PROJECT ID</p>
                        <input
                            type="number"
                            id="projectID"
                            name="projectID"
                            data-testid="projectID"
                            className="form-control mb-3"
                            placeholder="Project ID"
                            onChange={handleProjectData}
                        />
                        <label>PROJECT NAME</label>
                        <input
                            type="text"
                            id="projectName"
                            data-testid="projectName"
                            name="projectName"
                            className="form-control mb-3"
                            placeholder="Project Name"
                            onChange={handleProjectData}
                        />
                        <label>BUG ID</label>
                        <input
                            type="number"
                            id="bugId"
                            data-testid="bugId"
                            name="bugId"
                            className="form-control mb-3"
                            placeholder="Bug Id"
                            onChange={handleProjectData}
                        />
                        <p>START DATE OF PROJECT</p>
                        <input
                            type="date"
                            id="startDateOfProject"
                            data-testid="startDateOfProject"
                            name="startDateOfProject"
                            className="form-control mb-3"
                            placeholder="Start Date Of Project"
                            onChange={handleProjectData}
                        />
                        <p>END DATE OF PROJECT</p>
                        <input
                            type="date"
                            id="endDateOfProject"
                            name="endDateOfProject"
                            data-testid="endDateOfProject"
                            className="form-control mb-3"
                            placeholder="End Date Of Projectt"
                            onChange={handleProjectData}
                        />
                        <p>STAFF ID</p>
                        <input
                            type="number"
                            id="staffId"
                            name="staffId"
                            data-testid="staffId"
                            className="form-control mb-3"
                            placeholder="Staff Id"
                            onChange={handleProjectData}
                        />
                        <p>PROJECT PRIORITY</p>
                        <input
                            type="number"
                            id="projectPriority"
                            name="projectPriority"
                            data-testid="projectPriority"
                            className="form-control mb-3"
                            placeholder="Project Priority"
                            onChange={handleProjectData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            data-testid="submit"
                            className="btn btn-primary mb-3"
                            value="Update project"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default UpdateProject;