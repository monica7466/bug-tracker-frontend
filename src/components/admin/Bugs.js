import React from 'react';
import AdminDashboard from './AdminDashboard';


const Bugs = () => {

    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color:"blue",marginTop:"20px",marginLeft:"100px"}}>Bugs</h3>
                        <div className="row">
                            <button className="button1">Get all bugs</button>
                            <button className="button2">Search bug by ID</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
export default Bugs;