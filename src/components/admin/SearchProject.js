import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Project from './Project';


const SearchProject = () => {

    const [projectList, setProjectList] = useState([]);
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


    const SearchProjectById = (evt) => {
        console.log("SearchProjectById");
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
            <title>Get Project By ID</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Search Project</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={SearchProjectById} >
                    <div>
                        <p>Project Id</p>
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
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Project ID</th>
                        <th scope="col">Project Name</th>
                        <th scope="col">Bug ID</th>
                        <th scope="col">Start Date Of Project</th>
                        <th scope="col">End Date Of Project</th>
                        <th scope="col">Staff ID</th>
                        <th scope="col">projectPriority</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {projectList.map((p, k) => {
                            console.log(p);
                            return (
                                <div k={k}>
                                    <th scope="row">{p.projectID}</th>
                                    <td>{p.projectName}</td>
                                    <td>{p.bugId}</td>
                                    <td>{p.startDateOfProject}</td>
                                    <td>{p.endDateOfProject}</td>
                                    <td>{p.staffId}</td>
                                    <td>{p.projectPriority}</td>                 
                                 </div>
                               
                            )
                        })}
                        </tr>
                    </tbody>
                </table>
                <p><br/><br/></p>
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}

export default SearchProject;