import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllProject = (props) => {

    const [projectList, setProjectList] = useState([]);
    const [project, setProject] = useState({
        projectID: '',
        projectName: '',
        bugId: '',
        startDateOfProject: '',
        endDateOfProject: '',
        staffId: '',
        projectPriority: ''
    });
    const [oneProject, setOneProject] = useState({
        projectID: '',
        projectName: '',
        bugId: '',
        startDateOfProject: '',
        endDateOfProject: '',
        staffId: '',
        projectPriority: ''
    });


    const handleProjectData = (evt) => {
        console.log("handleProjectData", evt.target.name, evt.target.value);
        setProject({
            ...project,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOneProjectData = (evt) => {
        console.log("handleOneProjectData", evt.target.name, evt.target.value);
        setOneProject({
            ...project,
            [evt.target.name]: evt.target.value
        });
    }




    const viewProject = (evt) => {
        axios.get('http://localhost:8082/getAllEmployee')
            .then((response) => {
                setProjectList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Employee List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Projects</title>
            <h1>View Project Details</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Project"
                        onClick={viewProject}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-secondary table-striped">
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
                            
                                {projectList.map((p, k) => {
                                    console.log(p);
                                    return (

                                        <tr k={k}>

                                            <th scope="row">{p.projectID}</th>
                                            <td>{p.projectName}</td>
                                            <td>{p.bugId}</td>
                                            <td>{p.startDateOfProject}</td>
                                            <td>{p.endDateOfProject}</td>
                                            <td>{p.staffId}</td>
                                            <td>{p.projectPriority}</td>

                                            </tr>

                                    )
                                })}
                           
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    );
}
export default GetAllProject;