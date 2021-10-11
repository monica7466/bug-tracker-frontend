
import React from 'react';
import { useHistory } from 'react-router';

const Staff = () => {
    const history = useHistory();

    const submitGetStaffById = (event) => {


        history.push('/SearchStaffById');

        event.preventDefault();
    }
    const updateStaff = (event) => {


        history.push('/UpdateStaff');

        event.preventDefault();
    }
    const deleteAdmin = (event) => {


        history.push('/deleteStaff');

        event.preventDefault();
    }

    const submitAddStaff = (event) => {


        history.push('/addStaff');

        event.preventDefault();
    }
    const viewStaff = (event) => {


        history.push('/getAllStaff');

        event.preventDefault();
    }


    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row" className="alignment1">

                    <div className="col-sm-2"></div>
                    <div className="ref">
                        <h3 style={{ color: "blue", marginTop: "30px", marginRight: "150px" }}>Staffs</h3>
                        <div class="card-columns">
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="https://bit.ly/2WYrYUw" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Add Staff</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    <button type="button" class="btn btn-primary" onClick={submitAddStaff}>Add</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="https://bit.ly/3BvXtnR" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Update Staff</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" class="btn btn-primary" onClick={updateStaff} >Update</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="https://bit.ly/3lxKM6x" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Search Staff</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" class="btn btn-primary" onClick={submitGetStaffById}>Search</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="https://bit.ly/3oV6qUa" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Delete Staff</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" class="btn btn-primary" onClick={deleteAdmin} >Delete</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="https://bit.ly/3mItUcv" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Get All Staff</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" class="btn btn-primary" onClick={viewStaff}>getAll</button>
                                </div>
                            </div>
                        </div>
                        <p><br /><br /></p>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Staff;