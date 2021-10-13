

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from "axios";


const UserRegister = (props) => {
    const history = useHistory();
    const [userList, setuserList] = useState([]);
    const [user, setUser] = useState({
        userId: 0,
        userPassword: '',
        userName: ''

    });
    const [oneUser, setOneUser] = useState({
        userId: 0,
        userPassword: '',
        userName: ''
    });

    const handleUserData = (evt) => {
        console.log("handleUserData", evt.target.name, evt.target.value);
        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        });
    }

    const submitRegisterUser = (evt) => {
        console.log("submitRegisterUser");
        axios.post('http://localhost:8082/UserRegistration', user)
            .then((response) => {
                setOneUser(response.data);

                alert(`User Registered successfully!`)
                history.push('/home');
            }).catch(error => {
                alert('Enter Correct Details!');
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <div>

                <form className="form form-group row" onSubmit={submitRegisterUser} >
                    <div>
                        <form>
                        <p>User Name</p>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            className="form-control mb-3"
                            placeholder="User Name"
                            data-testid="userName"
                            onChange={handleUserData}
                        />
                        <p>User Password</p>
                        <input
                            type="text"
                            id="userPassword"
                            name="userPassword"
                            className="form-control mb-3"
                            placeholder="User Password"
                            data-testid="password"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            onChange={handleUserData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            data-testid="submit"
                            className="btn btn-primary mb-3"
                            value="Register"
                        />
                        </form>
                    </div>
                </form>
               

                
            </div>
        </div>
    );
}
export default UserRegister;