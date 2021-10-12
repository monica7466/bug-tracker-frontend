import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from "axios";

const UserRegister = (props) => {
    const history = useHistory();

    const [appUser, setAppUser] = useState({});

    useEffect(
        () => {
            setAppUser({
                userId: 0,
                userName: '',
                password: ''
            }
            );
        }, []);

    const handleAppUser = (event) => {
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        console.log(appUser.userName);
        console.log(appUser.password);
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        };
       // axios.get(`http://localhost:8080//Report/searchReport/${report.projectID}`)
        axios.post(`http://localhost:8080/appuser/register`, appUser, config)
            .then((response) => {
                console.log(response.data);
                history.push('/login');
            }).catch((error) => {
                console.log(error.message)
            });
        event.preventDefault();
    }
    return (
        <div className="container">
            <h1 className="font1">User Register</h1>
            <div>
                <form className="form form-group form-dark row mt-3 ml-5" onSubmit={submitAppUser}>
                    <div className="mb-3">
                    <input
                            type="number"
                            name="userId"
                            id="userId"
                            // Add data-testid here : jest-test  
                            data-testid="userId"
                            className="form-control mb-3"
                            placeholder="User Id"
                            // value={appUser.userId}
                            onChange={handleAppUser}
                        />
                        
                        <input
                            type="name"
                            name="userName"
                            id="userName"
                            // Add data-testid here : jest-test  
                            data-testid="userName"
                            className="form-control mb-3"
                            placeholder="User Name"
                            value={appUser.userName}
                            onChange={handleAppUser}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            // Add data-testid here : jest-test  
                            data-testid="password"
                            className="form-control mb-3"
                            placeholder="Password"
                            value={appUser.password}
                            onChange={handleAppUser} />

                        <input
                            type="password"
                            name="password"
                            id="password"
                            // Add data-testid here : jest-test  
                            data-testid="password"
                            className="form-control mb-3"
                            placeholder="Confirm Password"
                            value={appUser.password}
                            onChange={handleAppUser} />
                        <input
                            type="submit"
                            id="submit"
                            // Add data-testid here : jest-test  
                            data-testid="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Register"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default UserRegister;