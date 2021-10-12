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
            ...staff,
            [evt.target.name]: evt.target.value
        });
    }




    const viewStaff = (evt) => {
        axios.get('http://localhost:8082/Staff/getAllStaff')
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
                        value="Get All Staff"
                        onClick={viewStaff}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-secondary table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Staff ID</th>
                                <th scope="col">Staff Name</th>


                            </tr>
                        </thead>
                        <tbody>
                            
                                {staffList.map((p, k) => {
                                    console.log(p);
                                    return (
                                        <tr k={k}>
                                            <th scope="row">{p.staffId}</th>
                                            <td>{p.userName}</td>
                                            </tr>

                                    )
                                })}
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    );
}
export default GetAllStaff;