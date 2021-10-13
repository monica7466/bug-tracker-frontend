import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const AddProject = () => {

     //Data fields for input from browser
   
    const [project, setProject] = useState({
        projectID: 0,
        projectName: '',
        bugId:0,
        startDateOfProject: '',
        endDateOfProject: '',
        staffId: 0,
        projectPriority: 0
    });
     //Data fields for input from browser
    const [ setOneProject] = useState({
      projectID: 0,
      projectName: '',
      bugId:0,
      startDateOfProject: '',
      endDateOfProject: '',
      staffId: 0,
      projectPriority: 0
    });

    // Taking current data from  browser
    const handleProjectData = (evt) => {
        console.log("handleProjectData", evt.target.name, evt.target.value);
        setProject({
            ...project,
            [evt.target.name]: evt.target.value
        });
        evt.preventDefault();
    }

     /**
* When admin adds the project and submit it then submit project data is displayed on console window.
* Admin can also add the project with the help of URL and object to backend.
* If bugId  from the database matches, admin will able to see the alert message in a pop-up window as 'Project added successfully!'
* If bugId  from the database does not matches, admin will able to see the alert message in a pop-up window as 'Enter correct details!'

 


* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the project, relative to the url argument
* @return      
* @see         alert project
*/
 
    const submitAddProject = (evt) => {
        console.log("submitProjectData");
        axios.post('http://localhost:8082/Project/addProject', project)
            .then((response) => {
                setOneProject(response.data);
                alert('Project added successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter correct details!')
            });
        evt.preventDefault();
    }

   

    return (
        <div className="container" >
            <div>
                <p>Add a Project</p>
                <form className="form form-group row" onSubmit={submitAddProject} >
                    <div>
                         {/* Taking project name from browser */}
                        <label>PROJECT NAME</label>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            data-testid="projectName"
                            className="form-control mb-3"
                            placeholder="Project Name"
                            onChange={handleProjectData}
                        />
                        {/* Taking bug ID from browser */}
                        <label>BUG ID</label>
                        <input
                            type="number"
                            id="bugId"
                            name="bugId"
                            data-testid="bugId"
                            className="form-control mb-3"
                            placeholder="Bug Id"
                            onChange={handleProjectData}
                        />
                         {/* Taking start date of project from browser */}
                        <p>START DATE OF PROJECT</p>
                        <input
                            type="date"
                            id="startDateOfProject"
                            name="startDateOfProject"
                            data-testid="startDateOfProject"
                            className="form-control mb-3"
                            placeholder="Start Date Of Project"
                            onChange={handleProjectData}
                        />
                         {/* Taking end date of project from browser */}
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
                         {/* Taking staff id from browser */}
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
                        {/* Taking project priority from browser */}
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
                            value="Add"
                        />
                    </div>
                </form>
            </div>
           </div> 
    );
}
export default AddProject;