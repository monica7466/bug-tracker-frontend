import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllStaff = (props) => {

    const [staffList, setStaffList] = useState([]);
    const [staff, setStaff] = useState({
      staffId: 0,
      userName: '',
      staffPassword: ''
    });
    const [oneStaff, setOneStaff] = useState({
      staffId: 0,
      userName: '',
      staffPassword: ''
    });


    const handleStafftData = (evt) => {
        console.log("handleStaffData", evt.target.name, evt.target.value);
        setStaff({
            ...staff,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOneStaffData = (evt) => {
        console.log("handleOneStaffData", evt.target.name, evt.target.value);
        setOneStaff({
            ...stafft,
            [evt.target.name]: evt.target.value
        });
    }




    const viewStaff = (evt) => {
        axios.get('http://localhost:8080/Staff/getAllStaff')
            .then((response) => {
                setStaffList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Staff List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Staff</title>
            <h1>View Staff Details</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Stafft"
                        onClick={viewStaff}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Staff ID</th>
                                <th scope="col">Staff Name</th>
                                <th scope="col">Staff Password</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                        {projectList.map((p, k) => {
                            console.log(p);
                            return (
        
                                <div k={k}>
                                    
                                    <th scope="row">{S.StaffID}</th>
                                    <td>{S.UserName}</td>
                                    <td>{S.StaffPassword}</td>
                                    
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
export default GetAllStaff;