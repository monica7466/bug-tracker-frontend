
import React from 'react';
import { useHistory } from 'react-router';
import AdminDashboard from './AdminDashboard';
import SearchStaffById from './SearchStaffById';


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

    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">

                    <div className="col-sm-2"></div>
                    <div className="ref">
                        <h3 style={{ color: "blue", marginTop: "20px", marginLeft: "100px" }}>Staff</h3>
                        <div class="card-columns">
                            <div class="card" style={{ width: "18rem" }}>
                                {/* <img src="https://bit.ly/2WYrYUw" class="card-img-top" alt="..." /> */}
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Add Staff</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    <button type="button" class="btn btn-primary" >Add</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                {/* <img src="https://bit.ly/3FuVmmw" class="card-img-top" alt="..." /> */}
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Update Staff</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" class="btn btn-primary" onClick={updateStaff} >Update</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                {/* <img src="https://bit.ly/3FuVmmw" class="card-img-top" alt="..." /> */}
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Search Staff</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" class="btn btn-primary" onClick={submitGetStaffById}>Search</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                {/* <img src="https://bit.ly/3FuVmmw" class="card-img-top" alt="..." /> */}
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Delete Staff</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" class="btn btn-primary" onClick={deleteAdmin} >Delete</button>
                                </div>
                            </div>
                            <div class="card" style={{ width: "18rem" }}>
                                {/* <img src="https://bit.ly/3FuVmmw" class="card-img-top" alt="..." /> */}
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Get All Staff</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" class="btn btn-primary" >getAll</button>
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