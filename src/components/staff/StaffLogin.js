import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const StaffLogin = () => {

    const history = useHistory();


    const [oneStaff, setOneStaff] = useState({
        staffId: 0,
       // employeeName: '',
       staffName:'',
        staffPassword: ''
    });

    const handleOneStaffData = (evt) => {
        console.log("handleOneStaffData", evt.target.name, evt.target.value);
        setOneStaff({
            ...oneStaff,
            [evt.target.name]: evt.target.value
        });
    }

    const onSubmit = (evt) => {

        axios.post('http://localhost:8082/StaffLogin',oneStaff)
            .then(async(response) => {
                setOneStaff(response.data);
                alert("Staff logged in successfully!");
                history.push('/staffDashboard');
            }).catch(error => {
                console.log(error.message)
                alert("Staff does not exist!");
            });
        evt.preventDefault();
    }

    


    return (
        <div className="container">
            <title>Staff Login</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            <div class="card-body">
            <form>
                <h3>Staff Login</h3>

                <div className="form-group">
                    <label>Staff Name</label>
                    <input type="number"
                            id="staffId"
                            name="staffId"
                            className="form-control mb-3"
                            // value={oneAdmin.adminName}
                            onChange={handleOneStaffData}
                            placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                            id="staffPassword"
                            name="staffPassword"
                            className="form-control mb-3"
                            // value={oneAdmin.adminPassword}
                            onChange={handleOneStaffData}
                            placeholder="Enter Password" />
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

export default StaffLogin;