import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {  useEffect } from 'react';

const UserLogin = (props) => {

    const history = useHistory();


    const [oneUser, setOneUser] = useState({
        userId: 0,
       // employeeName: '',
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

        axios.post('http://localhost:8082/UsersLogin',oneUser)
            .then(async(response) => {
                setOneUser(response.data);
                alert(`User Logged in successfully!`)
                history.push('/userDashboard');
            }).catch(error => {
                console.log(error.message)
                alert("User does not exist!");
            });
        evt.preventDefault();
    }

    


    return (
        <div className="container">
            <title>User Login</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            <div class="card-body">
            <form>
                <h3>User Login</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="number"
                            id="userId"
                            name="userId"
                            className="form-control mb-3"
                            // value={oneUser.userName}
                            onChange={handleOneUserData}
                            placeholder="Enter userName" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                            id="userPassword"
                            name="userPassword"
                            className="form-control mb-3"
                            // value={oneUser.userPassword}
                            onChange={handleOneUserData}
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

export default UserLogin;


