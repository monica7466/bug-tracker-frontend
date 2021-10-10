import React from 'react';
import AdminDashboard from './AdminDashboard';


const Message = () => {

    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color:"blue",marginTop:"20px",marginLeft:"100px"}}>Message</h3>
                        <div className="row">
                            <button className="button1">Add a message</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
export default Message;