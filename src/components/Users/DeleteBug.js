import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
const DeleteBug = () => {
 
    const [bug, setBug] = useState({
        bugId: 0,
    });


 
    const handleBugData = (evt) => {
 
        console.log("handleBugData", evt.target.name, evt.target.value);
        setBug({
            ...bug,
            [evt.target.name]: evt.target.value,
 
        });
 
        evt.preventDefault();
    }
 
    const deleteBug = (evt) => {
 
        console.log(bug);
        axios.delete(`http://localhost:8082/bug/deleteBugById/${bug.bugId}`)
            .then((response) => {
                console.log(response);
                setBug(response.data);
                alert('Bug deleted successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
 
    return (
        <div className="container" >
            <title>Delete Bug</title>
            <div class="card" style={{ width: "18rem" }} className="container">
 
                <div class="card-body">
                    <h3 >Delete Bug</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={deleteBug} >
                        <div>
                            <p>Bug Id</p>
                            <input
                                type="number"
                                id="bugId"
                                name="bugId"
                                className="form-control mb-3"
                                value={bug.bugId}
                                placeholder="Enter Id"
                                onChange={handleBugData}
                            />
 
                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Delete Bug "
                            />
                        </div>
                    </form>
 
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}
 
export default DeleteBug;