import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AdminLogin = () => {

    const history = useHistory();


    const [oneAdmin, setOneAdmin] = useState({
        adminId: 0,
        // employeeName: '',
        adminName: '',
        adminPassword: ''
    });

    const handleOneAdminData = (evt) => {
        console.log("handleOneAdminData", evt.target.name, evt.target.value);
        setOneAdmin({
            ...oneAdmin,
            [evt.target.name]: evt.target.value
        });
    }

    const onSubmit = (evt) => {

        axios.post('http://localhost:8082/AdminLogin', oneAdmin)
            .then(async (response) => {
                setOneAdmin(response.data);
                alert("Admin logged in successfully!");
                history.push('/adminDashboard');
            }).catch(error => {
                console.log(error.message)
                alert(error.response.data.message)
            });
        evt.preventDefault();
    }




    return (
        <div className="container">
            <h4>Admin Login</h4>
            <hr />
            <div class="card" style={{ width: "18rem" }} className="container">
                <div class="card-body">
                    <form>


                        <div className="form-group">
                            <h6>Admin Name</h6>
                            <input type="number"
                                id="adminId"
                                name="adminId"
                                className="form-control mb-3"
                                // value={oneAdmin.adminName}
                                onChange={handleOneAdminData}
                                placeholder="Enter Name"
                            />
                        </div>

                        <div className="form-group">
                            <h6>Password</h6>

                            <input type="password"
                                id="adminPassword"
                                name="adminPassword"
                                // pattern="^[a-zA-Z0-9]+$"
                                className="form-control mb-3"
                                // value={oneAdmin.adminPassword}
                                onChange={handleOneAdminData}
                                placeholder="Enter Password"
                                important
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" onClick={onSubmit}>Submit</button>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;