import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const AddStaff = (props) => {

    const [staff, setStaff] = useState({
      staffId:0,
      staffPassword: '',
      userName: ''
        
    });
    const [oneStaff, setOneStaff] = useState({
      staffId:0,
      staffPassword: '',
      userName: ''
    });

    const handleStaffData = (evt) => {
        console.log("handleStaffData", evt.target.name, evt.target.value);
        setStaff({
            ...staff,
            [evt.target.name]: evt.target.value
        });
    }

    const submitAddStaff = (evt) => {
        console.log("submitStaffData");
        axios.post('http://localhost:8082/staff/addNewStaff', staff)
            .then((response) => {
                setOneStaff(response.data);
                alert(`Staff added successfully!`)
            }).catch(error => {
                alert('Enter Correct Details!');
            });
        evt.preventDefault();
    }

   

    return (
        <div className="container" >
            <div>
                
                <form className="form form-group row" onSubmit={submitAddStaff} >
                    <div>
                    <p>Staff ID</p>
                    <input
                            type="number"
                            id="staffId"
                            name="staffId"
                            className="form-control mb-3"
                            placeholder="Staff Id"
                            onChange={handleStaffData}
                        />
                        <p>Staff Password</p>
                        <input
                            type="text"
                            id="staffPassword"
                            name="staffPassword"
                            className="form-control mb-3"
                            placeholder="Staff Password"
                            onChange={handleStaffData}
                        />
                        <p>User Name</p>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            className="form-control mb-3"
                            placeholder="User Name"
                            onChange={handleStaffData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add staff"
                        />
                    </div>
                </form>
                {/* <p> {emp.eid} {emp.firstName} {emp.salary} </p> */}
            </div>
           </div> 
    );
}
export default AddStaff;