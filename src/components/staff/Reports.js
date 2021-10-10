import React from 'react';
// import AdminDashboard from './AdminDashboard';


const Reports = () => {

    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color:"blue",marginTop:"20px",marginLeft:"100px"}}>Report</h3>
                        <div className="row">
                            <button className="button1">Add project report</button>
                            <button className="button2">Update project report by project ID</button>
                            <button className="button3">Delete project report by project ID</button>
                            <button className="button4">Search project report by project ID</button>
                            <button className="button5">Get all reports</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
export default Reports;