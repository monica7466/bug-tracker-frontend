import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const AddBug = (props) => {

    const [bugList, setBugList] = useState([]);
    const [bug, setBug] = useState({
        bugId: 0,
        bugName: '',
        raisedDate: '',
        description: '',
        users: 0
    });
    const [oneBug, setOneBug] = useState({
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
            [evt.target.name]: evt.target.value
        });
    }

    const handleOneBugData = (evt) => {
        console.log("handleOneBugData", evt.target.name, evt.target.value);
        setOneBug({
            ...bug,
            [evt.target.name]: evt.target.value
        });
    }

    const submitAddBug = (evt) => {
        console.log("submitBugData");
        axios.post('http://localhost:8082/bug/addBug', bug)
            .then((response) => {
                setOneBug(response.data);
                alert('Bug sent successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }



    return (
        <div className="container" >
            <div>
                <p>Add a Bug</p>
                <form className="form form-group row" onSubmit={submitAddBug} >
                    <div>
                        <input
                            type="number"
                            id="bugId"
                            name="bugId"
                            className="form-control mb-3"
                            placeholder="bug Id"
                            onChange={handleBugData}
                        />
                        <input
                            type="text"
                            id="bugName"
                            name="bugName"
                            className="form-control mb-3"
                            placeholder="bug Name"
                            onChange={handleBugData}
                        />
                        <input
                            type="date"
                            id="raisedDate"
                            name="raisedDate"
                            className="form-control mb-3"
                            placeholder="raised Date"
                            onChange={handleBugData}
                        />
                        <input
                            type="text"
                            id="description"
                            name="description"
                            className="form-control mb-3"
                            placeholder="description"
                            onChange={handleBugData}
                        />
                        <input
                            type="number"
                            id="users"
                            name="users"
                            className="form-control mb-3"
                            placeholder="User Id"
                            onChange={handleBugData}
                        />


                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add Bug"
                        />
                    </div>
                </form>
                {/* <p> {emp.eid} {emp.firstName} {emp.salary} </p> */}
            </div>
        </div>
    );
}
export default AddBug;