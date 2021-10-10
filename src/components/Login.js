import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
// import Dashboard from './Dashboard';

const Login = (props) => {

    const history = useHistory();

    const [AppUser, setAppUser] = useState({
        userId: '',
        password: ''
    });

    useEffect(
        () => {
            setAppUser({
                userId: '',
                password: ''
            }
            );
        }, []);

    const handleAppUser = (event) => {
        console.log(event.target.value);
        setAppUser({
            ...AppUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        console.log(AppUser.userId);
        console.log(AppUser.password);
        // axios.post(`http://localhost:8082/appuser/login`, AppUser)
        //     .then((response) => {
        //         console.log(response.data);
                    history.push('/home');
            // }).catch((error) => {
            //     console.log(error.message)
            // });
        event.preventDefault();
    }
    return (
        <div className="container">
            <h1 className="display-4 text-primary">Login</h1>
            <div>
                <form className="form form-group form-dark row mt-3" onSubmit={submitAppUser}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            // Add data-testid here : jest-test  
                            data-testid="username"
                            className="form-control mb-3"
                            placeholder="User ID"
                            value={AppUser.userId}
                            onChange={handleAppUser}
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            // Add data-testid here : jest-test  
                            data-testid="password"
                            className="form-control mb-3"
                            placeholder="Password"
                            value={AppUser.password}
                            onChange={handleAppUser} />
                            required
                        <input
                            type="submit"
                            id="submit"
                            // Add data-testid here : jest-test  
                            data-testid="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Login"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
            </div>
            {/* <Dashboard/> */}
        </div >
    )
}
export default Login;