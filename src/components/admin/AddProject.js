import axios from 'axios';
import React, { useState, useEffect } from 'react';


const AddProject = () => {

    // const [empList, setEmpList] = useState([]);
    const [proj, setProject] = useState({

            projectID: 0,
            projectName: '',
            projectStartDate: '',
            projectEndDate: '',
            staffId: 0,
            priority:0,
            bugID:0

    });



    const handleProjectData = (evt) => {


        console.log("handleProjectData", evt.target.name, evt.target.value);
        setProject({
            ...proj,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitProjectDetails = (evt) => {

        console.log(proj);
        axios.post('http://localhost:8082/Project/addProject', proj)
            .then((response) => {
                console.log(response);
                setProject(response.data);
                alert(`Project Id ${proj.projectID} added Successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!');
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Add Project</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Add Project</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitProjectDetails} >
                    <div>
                        <p>Project Id</p>
                        <input
                            type="number"
                            id="projectID"
                            name="projectID"
                            className="form-control mb-3"
                            value={proj.projectID}
                            placeholder="Enter Id"
                            onChange={handleProjectData}
                        />
                        <p>Project Name</p>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            className="form-control mb-3"
                            value={proj.projectName}
                            placeholder="Enter Name"
                            onChange={handleProjectData}
                        />
                        <p>Start Date</p>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="form-control mb-3"
                            value={proj.projectStartDate}
                            placeholder="Enter Password"
                            onChange={handleProjectData}
                        />
                         <p>End Date</p>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="form-control mb-3"
                            value={proj.projectEndDate}
                            placeholder="Enter Password"
                            onChange={handleProjectData}
                        />
                        <p>Staff Id</p>
                        <input
                            type="number"
                            id="staffId"
                            name="staffId"
                            className="form-control mb-3"
                            value={proj.staffId}
                            placeholder="Enter Id"
                            onChange={handleProjectData}
                        />
                        <p>Bug Id</p>
                        <input
                            type="number"
                            id="bugID"
                            name="bugID"
                            className="form-control mb-3"
                            value={proj.bugID}
                            placeholder="Enter Id"
                            onChange={handleProjectData}
                        />
                        <p>Priority</p>
                        <input
                            type="number"
                            id="priority"
                            name="priority"
                            className="form-control mb-3"
                            value={proj.priority}
                            placeholder="Enter Id"
                            onChange={handleProjectData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add Project"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}

export default AddProject;