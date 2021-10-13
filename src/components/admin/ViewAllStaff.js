import axios from 'axios';
import React, { useState, useEffect } from 'react';

 /**
* When admin view the message and submit it then submit message data is displayed on console window.
* Admin can also post the message with the help of URL and object to backend.
* If staffId  from the database matches, admin will able to see the alert message in a pop-up window as 'Message sent!'
* If staffId  from the database does not matches, admin will able to see the alert message in a pop-up window as 'Please enter valid user ID!'

* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the message, relative to the url argument
* @return     
* @see         alert messsage
**/

 
const ViewAllStaff = (props) => {
 //Data fields for input from browser
    const [staffList, setStaffList] = useState([]);
    const [staff, setStaff] = useState({
        staffId: 0,
        userName: '',
        staffPassword: 0
    });
    //Data fields for input from browser
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
                        data-testid="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Staff"
                        onClick={submitViewStaff}
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
                       
                        {staffList.map((s, k) => {
                            console.log(s);
                            return (
        
                                <tr k={k}>
                                    
                                    <th scope="row">{s.staffId}</th>
                                    <td>{s.userName}</td>
                                        
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
export default ViewAllStaff;