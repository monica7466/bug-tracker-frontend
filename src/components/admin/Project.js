import React from 'react';
import { useHistory } from 'react-router';


const Project = () => {
    const history = useHistory();

    const submitAddProject = (event) => {


        history.push('/AddProject');

        event.preventDefault();
    }
    const viewProject = (event) => {


        history.push('/GetAllProject');

        event.preventDefault();
    }
    const SearchProjectById = (event) => {


        history.push('/searchProject');

        event.preventDefault();
    }
    const updateProjectDetails = (event) => {


        history.push('/updateProject');

        event.preventDefault();
    }
    const DeleteProject = (event) => {


        history.push('/deleteProject');

        event.preventDefault();
    }
    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row" className="alignment1">

                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color: "blue", marginTop: "30px", marginRight: "150px"}}>Projects</h3>
                        <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3FvfYv7" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Add Project</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={submitAddProject} >Add</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3BvXtnR" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Update Project</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={updateProjectDetails}>Update</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3lxKM6x" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Search Project</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={SearchProjectById}>Search</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3oV6qUa" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Delete Project</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={DeleteProject}>Delete</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3ByVcrR" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Get All Project</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary"onClick={viewProject} >View All</button>
                    </div>
                </div>
            </div>
            <p><br/><br/></p>
                    </div>


                </div>
</div>
                    </div>


    )
}
export default Project;