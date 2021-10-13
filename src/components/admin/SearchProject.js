import axios from 'axios';
import React, { useState, useEffect } from 'react';


const SearchProject = () => {

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


    const searchProject = (evt) => {
        console.log("searchProject");
        axios.get(`http://localhost:8082/searchProject/${project.projectID}`)
            .then((response) => {
                setProject(response.data);
            }).catch(error => {
                alert("Project ID does not exist!");
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
                    <form className="form form-group row container" onSubmit={searchProject} >
                        <div>
                            <p>PROJECT ID</p>
                            <input
                                type="number"
                                id="projectID"
                                name="projectID"
                                className="form-control mb-3"
                                value={project.projectID}
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
                    <table class="table table-hover table-secondary table-striped">
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
                            <tr>
                                <th scope="row">{project.projectID}</th>
                                <td>{project.projectName}</td>
                                <td>{project.bugId}</td>
                                <td>{project.startDateOfProject}</td>
                                <td>{project.endDateOfProject}</td>
                                <td>{project.staffId}</td>
                                <td>{project.projectPriority}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p></p>
                    <p><br /><br /></p>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default SearchProject;