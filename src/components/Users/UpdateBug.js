import axios from 'axios';
import React, { useState, useEffect } from 'react';


const UpdateBug = () => {


    const [bug, setBug] = useState({

        bugId: 0,
        bugName: '',
        raisedDate: '',
        description: '',
        users: 0

    });

    const handleBugData = (evt) => {


        console.log("handleBugData", evt.target.name, evt.target.value);
        setBug({
            ...bug,
            [evt.target.name]: evt.target.value,


        });

        evt.preventDefault();
    }


    const updateBugDetails = (evt) => {

        axios.put(`http://localhost:8082/bug/updateBug/${bug.bugId}`)
            .then((response) => {
                console.log(response);
                setBug(response.data);
                alert(`Bug updated successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>Update Bug Details</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Update Bug Details</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={updateBugDetails} >
                        <div>
                            <p>Bug ID</p>
                            <input
                                type="number"
                                id="bugId"
                                name="bugId"
                                className="form-control mb-3"
                                placeholder="Bug ID"
                                onChange={handleBugData}
                            />

                            <p>Bug Name</p>
                            <input
                                type="text"
                                id="bugName"
                                name="bugName"
                                className="form-control mb-3"
                                placeholder="Bug Name"
                                onChange={handleBugData}
                            />
                            <p>Raised Date</p>
                            <input
                                type="date"
                                id="raisedDate"
                                name="raisedDate"
                                className="form-control mb-3"
                                placeholder="Raised Date"
                                onChange={handleBugData}
                            />
                            <p>Description</p>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                className="form-control mb-3"
                                placeholder="Description"
                                onChange={handleBugData}
                            />
                            <p>Users</p>
                            <input
                                type="number"
                                id="users"
                                name="users"
                                className="form-control mb-3"
                                placeholder="User ID"
                                onChange={handleBugData}
                            />


                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Update Bug Details"
                            />
                        </div>
                    </form>

                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default UpdateBug;