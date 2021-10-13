import axios from 'axios';
import React, { useState, useEffect } from 'react';
/**
* When staff view the assign project and submit it then submit project data is displayed on console window.
* staff can also post the project with the help of URL and object to backend.
* If staffId  from the database matches, staff will able to see the alert project in a pop-up window as 'project assign!'
* If staffId  from the database does not matches, staff will able to see the alert message in a pop-up window as 'Please enter valid projectID!'

* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the message, relative to the url argument
* @return     
* @see         alert messsage
**/
const ViewAssignedProject = () => {

    const [projectList, setProjectList] = useState([]);
    const [project, setProject] = useState({

        projectID: 0,
        projectName: "",
        bugId: 0,
        startDateOfProject: "",
        endDateOfProject: "",
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


    const searchProjectByStaffId = (evt) => {
        console.log(project.staffId);
        axios.get(`http://localhost:8082/ViewAssignedProject/${project.staffId}`)
            .then((response) => {
                setProjectList(response.data);
                console.log(projectList)
            }).catch(error => {
                alert("Bug ID does not exist!");
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>Search Project</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Search Project</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={searchProjectByStaffId} >
                        <div>
                            <p>Staff Id</p>
                            <input
                                type="number"
                                id="staffId"
                                name="staffId"
                                className="form-control mb-3"
                                value={project.staffId}
                                placeholder="Enter Id"
                                onChange={handleProjectData}
                            />

                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Get Project Details"
                            />
                        </div>
                    </form>
                    <table class="table table-hover table-secondary table-stripped">
                        <thead>
                            <tr>
                                <th scope="col">PROJECT ID</th>
                                <th scope="col">PROJECT NAME</th>
                                <th scope="col">BUG ID</th>
                                <th scope="col">START DATE OF PROJECT</th>
                                <th scope="col">END DATE OF PROJECT</th>
                                <th scope="col">STAFF ID</th>
                                <th scope="col">PROJECT PRIORITY</th>

                            </tr>
                        </thead>
                        <tbody>

                            {projectList.map((r, k) => {
                                console.log(r);
                                return (

                                    <tr k={k}>

                                        <th scope="row">{r.projectID}</th>
                                        <td>{r.projectName}</td>
                                        <td>{r.bugId}</td>
                                        <td>{r.startDateOfProject}</td>
                                        <td>{r.endDateOfProject}</td>
                                        <td>{r.staffId}</td>
                                        <td>{r.projectPriority}</td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                    <p><br /><br /></p>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default ViewAssignedProject;