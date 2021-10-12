import React from 'react';
import LoginPage from '../LoginPage';
import AddBug from './AddBug';
import AddMessage from './admin/AddMessage';
import AddProject from './admin/AddProject';
import DeleteStaff from './admin/DeleteStaff';
import SearchStaffById from './admin/SearchStaffById';
import UpdateStaff from './admin/UpdateStaff';
import ViewAllStaff from './admin/ViewAllStaff';
import RegisterPage from './RegisterPage';

const Home = () => {

    return (
        <div className="container">
            <h1 className="display-4 text-primary text-center">Bug Tracker</h1>
            <div className="navbar mdb-navbar1">
                {/* <AddBug/> */}
                {/* <div class="card-columns">
                            <div class="card" style={{ width: "18rem" }}> */}
                {/* <img src="https://bit.ly/2WYrYUw" class="card-img-top" alt="..." /> */}
                {/* <div class="card-body">
                                    <h5 class="card-title">Add Admin</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                {/* <button type="button" class="btn btn-primary" >Add</button>
                                </div>
                            </div> */}
            {/* </div> */}
            {/* <AddProject/> */}
            {/* <AddMessage/> */}
            {/* <ViewAllStaff/> */}
            {/* <SearchStaffById />
             */}
             {/* <DeleteStaff/> */}
             {/* <UpdateStaff/> */}
             <LoginPage/>
             <RegisterPage/>
        </div>
        </div >
    )
}

export default Home;