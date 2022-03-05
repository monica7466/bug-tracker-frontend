import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AdminLogin = () => {

    const history = useHistory();
    var required = true;
    //Data fields for input from browser
    const [oneAdmin, setOneAdmin] = useState({
        adminId: 0,
        adminName: '',
        adminPassword: ''
    });

    // Taking current data from browser
    const handleOneAdminData = (evt) => {
        console.log("handleOneAdminData", evt.target.name, evt.target.value);
        setOneAdmin({
            ...oneAdmin,
            [evt.target.name]: evt.target.value
        });
    }

    /**
* When admin try to login with credentials and submit it then submit message data is displayed on console window.
* Admin can login with the help of URL and object to backend.
* If credentials  from the database matches, admin will able to see the alert message in a pop-up window as "Admin logged in successfully!"
* If credentials from the database does not matches, admin will able to see the alert message in a pop-up window as 'Please enter valid user ID!'

 


* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the message, relative to the url argument
* @return      
* @see         alert 
*/
    const onSubmit = (evt) => {
        if (oneAdmin.adminId && oneAdmin.adminPassword) {
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
        else {
            console.log("enter fields correctly");
        }
    }




    return (
        <div className="container">
            <h4>Admin Login</h4>
            <hr />
            <div className="card" style={{ width: "18rem" }} className="container">
                <div class="card-body">
                    <form>

                        {/* Taking admin Id from browser */}
                        <div className="form-group">
                            <h6>Admin ID</h6>
                            <input type="number"
                                id="adminId"
                                name="adminId"
                                data-testid="adminId"
                                required={required}
                                className="form-control mb-3"
                                onChange={handleOneAdminData}
                                placeholder="Enter Name"
                            />
                        </div>
                        {/* Taking admin password from browser */}
                        <div className="form-group">
                            <h6>Password</h6>
                            <input type="password"
                                id="adminPassword"
                                data-testid="password"
                                required={required}
                                name="adminPassword"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                className="form-control mb-3"
                                onChange={handleOneAdminData}
                                placeholder="Enter Password"
                                important
                            />
                        </div>
                        {/* conditional rendering with OneAdmin and set OneAdminOneAdmin */}
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

export default AdminLogin;