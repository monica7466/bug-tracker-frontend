import axios from 'axios';
import React, { useState, useEffect } from 'react';

const UpdateStaff = () => {

    const [staff, setStaff] = useState({

        staffId: 0,
        userName: '',
        staffPassword: ''

    });



    const handleStaffData = (evt) => {

        console.log("handleStaffData", evt.target.name, evt.target.value);
        setStaff({
            ...staff,
            [evt.target.name]: evt.target.value,


        });

        evt.preventDefault();
    }

    const updateStaff = (evt) => {

        console.log(staff);
        axios.put(`http://localhost:8082/staff/updateStaff/${staff.staffId}`,staff)
            .then((response) => {
                console.log(response);
                setStaff(response.data);
                alert(`Staff updated successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>Update Staff</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Update Staff</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={updateStaff} >
                        <div>
                            <p>Staff Id</p>
                            <input
                                type="number"
                                id="staffId"
                                name="staffId"
                                className="form-control mb-3"
                                value={staff.staffId}
                                placeholder="Enter Id"
                                onChange={handleStaffData}
                            />
                            <p>Staff Name</p>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                className="form-control mb-3"
                                // pattern="[A-Za-z ]+"
                                title="Please enter only characters!"
                                minLength="3"
                                maxLength="20"
                                value={staff.userName}
                                placeholder="Enter Name"
                                onChange={handleStaffData}
                            />
                            <p>Passsword</p>
                            <input
                                type="staffPassword"
                                id="staffPassword"
                                name="staffPassword"
                                className="form-control mb-3"
                                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                                value={staff.staffPassword}
                                placeholder="Enter Password"
                                onChange={handleStaffData}
                            />
                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Update Staff"
                            />
                        </div>
                    </form>
                    {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}

                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default UpdateStaff;