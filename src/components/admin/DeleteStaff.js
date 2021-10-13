import axios from 'axios';
import React, { useState } from 'react';
/**
* When admin deletes the Staff and submit it then staff deleted will be displayed on console window.
* Admin can also delete the staff with the help of URL and object to backend.
* If staffId  from the database matches, admin will able to see the alert message in a pop-up window as 'staff' deleted successfully!'
* IfstaffId  from the database does not matches, admin will able to see the alert message in a pop-up window as 'Enter correct details!'

* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the stafft, relative to the url argument
* @return     
* @see         alert staff
*/


const DeleteStaff = () => {
    //Data fields for input from browser
    const [staff, setStaff] = useState({
        staffId: 0,
        staffName: ''
    });



    const handleStafftData = (evt) => {

        console.log("handleStafftData", evt.target.name, evt.target.value);
        setStaff({
            ...staff,
            [evt.target.name]: evt.target.value,

        });

        evt.preventDefault();
    }

    const deleteStaff = (evt) => {

        console.log(staff);
        axios.delete(`http://localhost:8082/staff/deleteStaffById/${staff.staffId}`)
            .then((response) => {
                console.log(response);
                setStaff(response.data);
                alert('Staff deleted successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Delete Staff</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Delete Staff</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={deleteStaff} >
                        <div>
                            <p>Staff Id</p>
                            <input
                                type="number"
                                id="staffId"
                                name="staffId"
                                data-testid="staffId"
                                className="form-control mb-3"
                                placeholder="Enter Staff Id"
                                onChange={handleStafftData}
                            />

                            <input
                                type="submit"
                                id="submit"
                                data-testid="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Delete Staff"
                            />
                        </div>
                    </form>

                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default DeleteStaff;