import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
/**
* When user try to login with credentials and submit it then submit message data is displayed on console window.
* User can login with the help of URL and object to backend.
* If credentials  from the database matches, user will able to see the alert message in a pop-up window as "User logged in successfully!"
* If credentials from the database does not matches, user will able to see the alert message in a pop-up window as 'Please enter valid user ID!'

 


* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the message, relative to the url argument
* @return      
* @see         alert 
*/
const UserLogin = (props) => {
    var required = true;
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [oneUser, setOneUser] = useState({
        userId: 0,
        userName: '',
        userPassword: ''
    });

    useEffect(
        () => {
            setOneUser({
                userId: '',
                userName: '',
                password: ''
            }
            );
        }, []);

    const handleOneUserData = (evt) => {
        console.log("handleOneUserData", evt.target.name, evt.target.value);
        setOneUser({
            ...oneUser,
            [evt.target.name]: evt.target.value
        });
    }

    const onSubmit = (evt) => {
        if (oneUser.userId && oneUser.userPassword) {
            axios.post('http://localhost:8082/UsersLogin', oneUser)
                .then(async (response) => {
                    setOneUser(response.data);
                    setIsLoggedIn(true);
                    alert(`User Logged in successfully!`)
                    history.push('/userDashboard');
                }).catch(error => {
                    console.log(error.message)
                    alert("User does not exist!");
                });
            evt.preventDefault();
        }
        else {
            console.log("enter fields correctly");
        }
    }



    return (
        <div className="container">
            <h4>User Login</h4>
            <hr />
            <div className="card" style={{ width: "18rem" }} className="container">
                <div className="card-body">
                    <form>


                        <div className="form-group">
                            <label>User ID</label>
                            <input type="number"
                                id="userId"
                                name="userId"
                                data-testid="userId"
                                className="form-control mb-3"
                                required={required}
                                onChange={handleOneUserData}
                                placeholder="Enter userId" />

                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password"
                                id="userPassword"
                                name="userPassword"
                                data-testid="password"
                                required={required}
                                className="form-control mb-3"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                onChange={handleOneUserData}
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

export default UserLogin;


