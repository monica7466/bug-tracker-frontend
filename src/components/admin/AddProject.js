import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const AddProject = (props) => {

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
    const [oneProject, setOneProject] = useState({
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
            [evt.target.name]: evt.target.value
        });
    }

    // const handleOneProjectData = (evt) => {
    //     console.log("handleOneProjectData", evt.target.name, evt.target.value);
    //     setOneProject({
    //         ...project,
    //         [evt.target.name]: evt.target.value
    //     });
    // }

    const submitAddProject = (evt) => {
        console.log("submitProjectData");
        axios.post('http://localhost:8082/Project/addProject', project)
            .then((response) => {
                setOneProject(response.data);
            }).catch(error => {
                console.log(error.message);
            });
        evt.preventDefault();
    }

   

    return (
        <div className="container" >
            <div>
                <p>Add a Project</p>
                <form className="form form-group row" onSubmit={submitAddProject} >
                    <div>
                    <p>PROJECT ID</p>
                    <input
                            type="number"
                            id="projectID"
                            name="projectID"
                            className="form-control mb-3"
                            placeholder="Project ID"
                            onChange={handleProjectData}
                        />
                        <label>PROJECT NAME</label>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            className="form-control mb-3"
                            placeholder="Project Name"
                            onChange={handleProjectData}
                        />
                        <label>BUG ID</label>
                        <input
                            type="number"
                            id="bugId"
                            name="bugId"
                            className="form-control mb-3"
                            placeholder="Bug Id"
                            onChange={handleProjectData}
                        />
                        <p>START DATE OF PROJECT</p>
                        <input
                            type="date"
                            id="startDateOfProject"
                            name="startDateOfProject"
                            className="form-control mb-3"
                            placeholder="Start Date Of Project"
                            onChange={handleProjectData}
                        />
                        <p>END DATE OF PROJECT</p>
                        <input
                            type="date"
                            id="endDateOfProjectt"
                            name="endDateOfProjectt"
                            className="form-control mb-3"
                            placeholder="End Date Of Projectt"
                            onChange={handleProjectData}
                        />
                        <p>STAFF ID</p>
                        <input
                            type="number"
                            id="staffId"
                            name="staffId"
                            className="form-control mb-3"
                            placeholder="Staff Id"
                            onChange={handleProjectData}
                        />
                        <p>PROJECT PRIORITY</p>
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
                            value="Add project"
                        />
                    </div>
                </form>
            </div>
           </div> 
    );
}
export default AddProject;