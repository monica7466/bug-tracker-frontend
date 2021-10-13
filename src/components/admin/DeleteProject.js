import axios from 'axios';
import React, { useState, useEffect } from 'react';

/**
* When admin deletes the project and submit it then project deleted will be displayed on console window.
* Admin can also delete the project with the help of URL and object to backend.
* If projectId  from the database matches, admin will able to see the alert message in a pop-up window as 'Project deleted successfully!'
* If projectId  from the database does not matches, admin will able to see the alert message in a pop-up window as 'Enter correct details!'

* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the project, relative to the url argument
* @return     
* @see         alert project
*/

const DeleteProject = () => {


    const [project, setProject] = useState({
        projectID: 0,
        projectName: '',
        bugId: 0,
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


    const deleteProject = (evt) => {

        console.log(project);
        axios.delete(`http://localhost:8082/Project/deleteProject/${project.projectID}`)
            .then((response) => {
                console.log(response);
                setProject(response.data);
                alert('Project deleted successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Project ID does not exist!')
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>Delete Project</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Delete Project</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={deleteProject} >
                        <div>
                            <p>Project Id</p>
                            <input
                                type="number"
                                id="projectID"
                                name="projectID"
                                data-testid="projectId"
                                className="form-control mb-3"
                                placeholder="Enter Id"
                                onChange={handleProjectData}
                            />


                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                data-testid="submit"
                                className="btn btn-primary mb-3"
                                value="Delete Project"
                            />
                        </div>
                    </form>
                    <h1></h1>

                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}


export default DeleteProject;