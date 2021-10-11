import React from 'react';
 
const Bug = () => {
 
    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color:"blue",marginTop:"20px",marginLeft:"100px"}}>Bugs</h3>
                        <div className="row">
                            <button className="button1">Add bugs</button>
                            <button className="button2">Update bug</button>
                            <button className="button3">Delete bug</button>
                            <button className="button4">Search bug</button>
                        </div>
                    </div>
 
                </div>
 
            </div>
 
        </div>
    )
}
export default Bug;