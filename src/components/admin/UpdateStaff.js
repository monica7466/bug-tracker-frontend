import axios from 'axios';
import React, { useState, useEffect } from 'react';
/**
* When admin update the staff then updated staff will be displayed on console window.
* Admin can also update the staff with the help of URL and object to backend.
* If StaffId  from the database matches, admin will able to see the alert message in a pop-up window as 'Staff updated successfully!'
* If StaffId  from the database does not matches, admin will able to see the alert message in a pop-up window as "Project ID does not exist!"

 


* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the project, relative to the url argument
* @return      
* @see         alert project
*/
const UpdateStaff = () => {
    //Data fields for input from browser
    const [staff, setStaff] = useState({

        staffId: 0,
        userName: '',
        staffPassword: ''

    });


    // Taking current data from  browser
    const handleStaffData = (evt) => {

        console.log("handleStaffData", evt.target.name, evt.target.value);
        setStaff({
            ...staff,
            [evt.target.name]: evt.target.value,


        });

        evt.preventDefault();
    }
    // Taking current data from  browser
    const updateStaff = (evt) => {

        console.log(staff);
        axios.put(`http://localhost:8082/staff/updateStaff/${staff.staffId}`, staff)
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
                                data-testid="staffId"
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
                                pattern="[A-Za-z ]+"
                                title="Please enter only characters!"
                                minLength="3"
                                maxLength="20"
                                data-testid="userName"
                                value={staff.userName}
                                placeholder="Enter Name"
                                onChange={handleStaffData}
                            />
                            <p>Passsword</p>
                            <input
                                type="staffPassword"
                                id="staffPassword"
                                data-testid="staffPassword"
                                name="staffPassword"
                                className="form-control mb-3"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                                value={staff.staffPassword}
                                placeholder="Enter Password"
                                onChange={handleStaffData}
                            />
                            <input
                                type="submit"
                                id="submit"
                                data-testid="submit"
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