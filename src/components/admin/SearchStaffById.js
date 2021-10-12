import axios from 'axios';
import React, { useState, useEffect } from 'react';


const SearchStaffById = () => {

    //const [empList, setEmpList] = useState([]);
    const [staff, setStaff] = useState({

        staffId: 0,
        userName: '',

    });

   

    const handleStaffData = (evt) => {


        console.log("handleStaffData", evt.target.name, evt.target.value);
        setStaff({
            ...staff,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitGetStaffById = (evt) => {
        console.log("submitGetStaffById");
        axios.get(`http://localhost:8082//Staff/searchStaff${staff.staffId}`)
            .then((response) => {
                setStaff(response.data);
            }).catch(error => {
                alert("Staff ID does not exist!");
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Get Staff By ID</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Get Staff By ID</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitGetStaffById} >
                    <div>
                        <p>Staff Id</p>
                        <input
                            type="number"
                            id="staffId"
                            name="staffId"
                            className="form-control mb-3"
                            value={staff.staffId}
                            placeholder="Enter Id"
                            onChange={handleStaffData}
                        />
            
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Get Staff Details"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                <table class="table table-hover table-secondary table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Staff ID</th>
                            <th scope="col">Staff Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{staff.staffId}</th>
                            <td>{staff.userName}</td>
                        </tr>
                    </tbody>
                </table>
                <p><br/><br/></p>
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}

export default SearchStaffById;