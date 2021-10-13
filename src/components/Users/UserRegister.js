import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from "axios";


const UserRegister = (props) => {
    const history = useHistory();

    const [user, setUser] = useState({
      userId:0,
      userPassword: '',
      userName: ''
        
    });
    const [oneUser, setOneUser] = useState({
        userId:0,
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
                    {/* <p>Staff ID</p>
                    <input
                            type="number"
                            id="staffId"
                            name="staffId"
                            className="form-control mb-3"
                            placeholder="Staff Id"
                            onChange={handleStaffData}
                        /> */}
                                                <p>User Name</p>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            className="form-control mb-3"
                            placeholder="User Name"
                            onChange={handleUserData}
                        />
                        <p>User Password</p>
                        <input
                            type="text"
                            id="userPassword"
                            name="userPassword"
                            className="form-control mb-3"
                            placeholder="User Password"
                            onChange={handleUserData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Register"
                        />
                    </div>
                </form>
               
                {/* <p> {emp.eid} {emp.firstName} {emp.salary} </p> */}
            </div>
           </div> 
    );
}
export default UserRegister;