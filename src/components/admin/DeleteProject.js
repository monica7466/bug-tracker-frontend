import axios from 'axios';
import React, { useState, useEffect } from 'react';


const DeleteProject = () => {


    const [project, setProject] = useState({
        projectID: '',
    });



    const handleProjectData = (evt) => {


        console.log("handleAdminData", evt.target.name, evt.target.value);
        setProject({
            ...project,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const deleteProject = (evt) => {

        console.log(project);
        axios.delete(`http://localhost:8082/deleteAdmin/${project.projectID}`)
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
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete Project</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={deleteProject} >
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
                            value="Delete PRoject"
                        />
                    </div>
                </form>
                 <h1>{project.projectID}</h1>
                
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}


export default DeleteProject;