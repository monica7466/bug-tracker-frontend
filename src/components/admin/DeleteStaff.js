import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
const DeleteStaff = () => {
 
    const [staff, setStaff] = useState({
 
            staffId: 0,
            userName: '',
            staffPassword: ''
 
    });


 
    const handleStaffData = (evt) => {
 
        console.log("handleStaffData", evt.target.name, evt.target.value);
        setStaff({
            ...staff,
            [evt.target.name]: evt.target.value,
           
 
        });
 
        evt.preventDefault();
    }
 
    const deleteAdmin = (evt) => {
 
        console.log(staff);
        axios.delete(`http://localhost:8082/staff/deleteStaffById/${staff.staffId}`)
            .then((response) => {
                console.log(response);
                setStaff(response.data);
                alert('Staff deleted successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    
 
    return (
        <div className="container" >
            <title>Delete Staff</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete Staff</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={deleteAdmin} >
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
                            value="Delete Staff"
                        />
                    </div>
                </form>
                 <h1>{staff.staffId}</h1>
                
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}
 
export default DeleteStaff;