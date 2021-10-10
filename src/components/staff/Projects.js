import React from 'react';
// import StaffDashboard from './StaffDashboard';


const Staffs = () => {

    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color:"blue",marginTop:"20px",marginLeft:"100px"}}>Project</h3>
                        <div className="row">
                        <button className="button4">View assigned project by staff ID</button>
                        <button className="button4">Assign project to other staff</button>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}
export default Staffs;