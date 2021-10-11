import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';


 
const ViewAllStaff = (props) => {
 
    const [staffList, setStaffList] = useState([]);
    const [staff, setStaff] = useState({
        staffId: 0,
        userName: '',
        staffPassword: 0
    });
    const [oneStaff, setOneStaff] = useState({
        staffId: 0,
        userName: '',
        staffPassword: 0
    });
 
    const handleStaffData = (evt) => {
        console.log("handleStaffData", evt.target.name, evt.target.value);
        setStaff({
            ...staff,
            [evt.target.name]: evt.target.value
        });
    }
 
    const handleOneStaffData = (evt) => {
        console.log("handleOneStaffData", evt.target.name, evt.target.value);
        setOneStaff({
            ...staff,
            [evt.target.name]: evt.target.value
        });
    }



 
    const submitViewStaff = (evt) => {
        axios.get('http://localhost:8082//Staff/getAllStaff')
            .then((response) => {
                setStaffList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Employee List is empty");
            });
        evt.preventDefault();
    }
 
    return (
        <div className="container" >
            <title>Get All Employees</title>
            <h1>View Employee Details</h1>
 
            <div>
 
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Staff"
                        onClick={submitViewStaff}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Staff ID</th>
                                <th scope="col">Staff Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                        {staffList.map((s, k) => {
                            console.log(s);
                            return (
        
                                <div k={k}>
                                    
                                    <th scope="row">{s.staffId}</th>
                                    <td>{s.userName}</td>
                                        
                                 </div>
                               
                            )
                        })}
                         </tr>
                        </tbody>
                    </table>
                </div>
 
            </div>
        </div >
    );
}
export default ViewAllStaff;