import axios from 'axios';
import React, { useState, useEffect } from 'react';
/**
* When admin search the staff then staff search will be displayed on console window.
* Admin can also search the staff with the help of URL and object to backend.
* If stafftId  from the database matches, admin will able to see the alert message in a pop-up window as 'staff searched successfully!'
* If staffId  from the database does not matches, admin will able to see the alert message in a pop-up window as "staff ID does not exist!"

* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the project, relative to the url argument
* @return     
* @see         alert project
*/

const SearchStaffById = () => {

    //Data fields for input from browser
    const [staff, setStaff] = useState({

        staffId: 0,
        userName: '',

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


    const submitGetStaffById = (evt) => {
        console.log("submitGetStaffById");
        axios.get(`http://localhost:8082//Staff/searchStaff${staff.staffId}`)
            .then((response) => {
                setStaff(response.data);
            }).catch(error => {
                alert("Staff ID does not exist!");
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>Get Staff By ID</title>
            <div class="card" style={{ width: "18rem" }} className="container">
                { /* form-group row - It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging.
                   By clicking on submit button, submitAddMsg is called.
                */}
                <div class="card-body">
                    <h3 >Get Staff By ID</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitGetStaffById} >
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

                            <input
                                type="submit"
                                id="submit"
                                data-testid="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Get Staff Details"
                            />
                        </div>
                    </form>
                    <table class="table table-hover table-secondary table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Staff ID</th>
                                <th scope="col">Staff Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{staff.staffId}</th>
                                <td>{staff.userName}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><br /><br /></p>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default SearchStaffById;