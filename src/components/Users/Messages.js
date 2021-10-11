import React from 'react';
 
const Messages = () => {
 
    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color:"blue",marginTop:"20px",marginLeft:"100px"}}>Messages</h3>
                        <div className="row">
                            <button className="button1">View Messages</button>
                            <button className="button2">Delete Messages</button>
                        </div>
                    </div>
 
                </div>
 
            </div>
 
        </div>
    )
}
export default Messages;