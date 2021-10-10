import React from 'react';
import AdminDashboard from './AdminDashboard';


const Staff = () => {

    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color:"blue",marginTop:"20px",marginLeft:"100px"}}>Staff</h3>
                        <div className="row">
                        <button className="button1">Add staff</button>
                        <button className="button2">Update staff</button>
                        <button className="button3">Delete staff by ID</button>
                        <button className="button4">Get all staff</button>
                         <button className="button5">Search staff by ID</button>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}
export default Staff;