import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
// import Dashboard from './Dashboard';

const StaffLogin = (props) => {

    const history = useHistory();

//Data fields for input from browser
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

 //Data fields for input from browser

    const handleAppUser = (event) => {
        console.log(event.target.value);
        setAppUser({
            ...AppUser,
            [event.target.name]: event.target.value
        });
    };

    //Data fields for input from browser
     const submitAppUser = (event) => {
        console.log(AppUser.userId);
        console.log(AppUser.password);
       
        event.preventDefault();
    }

    return (
        <div className="container">
            <h4> Staff Login </h4>

            <hr/>
            <div class="card" style={{ width: "18rem" }} className="container">
            <div class="card-body"></div>
           
                <form onSubmit={submitAppUser}>
                    <div className="mb-3">

                    <h6> Staff ID </h6>

                    {/* Taking user Id from browser */}

                        <input
                            type="text"
                            className="staffId"
                            name="staffId"
                            id="staffId"
                            data-testid="staffId"
                            className="form-control mb-3"
                            placeholder="Enter Id"
                            value={AppUser.userId}
                            onChange={handleAppUser}
                          
                         />

                       <h6> Staff Password </h6>

                       {/* Taking password from browser */}
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            // Add data-testid here : jest-test  
                            data-testid="password"
                            className="form-control mb-3"
                            placeholder="Enter Password"
                            value={AppUser.password}
                            onChange={handleAppUser} />
                           
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

                 {/* conditional rendering with AppUser and setAppUser */}
                 
            </div>
           
        </div >
    )
}
export default StaffLogin;