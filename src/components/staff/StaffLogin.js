import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
/**
* When staff try to login with credentials and submit it then submit message data is displayed on console window.
* Staff can login with the help of URL and object to backend.
* If credentials  from the database matches, staff will able to see the alert message in a pop-up window as "Admin logged in successfully!"
* If credentials from the database does not matches, staff will able to see the alert message in a pop-up window as 'Please enter valid user ID!'

 


* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the message, relative to the url argument
* @return      
* @see         alert 
*/

const StaffLogin = () => {

    const history = useHistory();

    var required = true;
    const [oneStaff, setOneStaff] = useState({
        staffId: 0,
        staffName: '',
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
        if (oneStaff.staffId && oneStaff.staffPassword) {
        axios.post('http://localhost:8082/StaffLogin', oneStaff)
            .then(async (response) => {
                setOneStaff(response.data);
                alert("Staff logged in successfully!");
                history.push('/staffDashboard');
            }).catch(error => {
                console.log(error.message)
                alert("Staff does not exist!");
            });
        evt.preventDefault();
        }
        else {
            console.log("enter fields correctly");
        }
    }




    return (
        <div className="container">
            <title>Staff Login</title>
            <div class="card" style={{ width: "18rem" }} className="container">
                <div class="card-body">
                    <form>
                        <h3>Staff Login</h3>

                        <div className="form-group">
                            <label>Staff ID</label>
                            <input type="number"
                                id="staffId"
                                name="staffId"
                                required={required}
                                data-testid="staffId"
                                className="form-control mb-3"
                                onChange={handleOneStaffData}
                                placeholder="Enter username" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password"
                                id="staffPassword"
                                name="staffPassword"
                                required={required}
                                data-testid="password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                className="form-control mb-3"
                                onChange={handleOneStaffData}
                                placeholder="Enter Password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" data-testid="submit" onClick={onSubmit}>Submit</button>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default StaffLogin;