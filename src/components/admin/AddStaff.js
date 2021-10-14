import axios from 'axios';
import React from 'react';
import { useState } from 'react';



const AddStaff = () => {

    //Data fields for input from browser
    const [staff, setStaff] = useState({
        staffId: 0,
        staffPassword: '',
        userName: ''
    });

    //Data fields for input from browser
    const [oneStaff, setOneStaff] = useState({
        staffId: 0,
        staffPassword: '',
        userName: ''
    });

    // Taking current data from  browser
    const handleStaffData = (evt) => {
        console.log("handleStaffData", evt.target.name, evt.target.value);
        setStaff({
            ...staff,
            [evt.target.name]: evt.target.value
        });
    }



    /**
* When admin adds the staff and submit it then submit staff data is displayed on console window.
* Admin can also add the staff with the help of URL and object to backend.
* If staffId  from the database matches, admin will able to see the alert message in a pop-up window as 'Staff added successfully!'
* If staffId  from the database does not matches, admin will able to see the alert message in a pop-up window as 'Enter Correct Details!'

 


* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the message, relative to the url argument
* @return      
* @see         alert messsage
*/




    const submitAddStaff = (evt) => {
        console.log("submitStaffData");
        axios.post('http://localhost:8082/staff/addNewStaff', staff)
            .then((response) => {
                setOneStaff(response.data);
                alert('Staff added successfully!')
            }).catch(error => {
                alert(error.response.data.message)
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <div>
                <h4>Add Staff</h4>
                <hr />

                { /* form-group row - It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging.
                   By clicking on submit button, submitAddMsg is called.
                */}


                <form className="form form-group row" onSubmit={submitAddStaff} >
                    <div>
                        {/* Taking user name from browser */}
                        <h6>Staff Name</h6>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            data-testid="userName"
                            pattern="[A-Za-z]+"
                            className="form-control mb-3"
                            placeholder="Enter User Name"
                            onChange={handleStaffData}
                        />

                        {/* Taking staff password from browser */}
                        <h6>Staff Password</h6>
                        <input
                            type="password"
                            id="staffPassword"
                            name="staffPassword"
                            data-testid="staffPassword"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            className="form-control mb-3"
                            placeholder="Enter Staff Password"
                            onChange={handleStaffData}
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
export default AddStaff;